let monitoring = false;
let intervalId = null;

const btnStart   = document.getElementById('btn-start');
const btnStop    = document.getElementById('btn-stop');
const btnRefresh = document.getElementById('btn-refresh');

btnStart.addEventListener('click', () => {
  if (monitoring) return;
  monitoring = true;
  btnStart.disabled = true;
  btnStop.disabled  = false;
  fetchStatus();
  intervalId = setInterval(fetchStatus, 60000);
});

btnStop.addEventListener('click', () => {
  monitoring = false;
  btnStart.disabled = false;
  btnStop.disabled  = true;
  clearInterval(intervalId);
});

btnRefresh.addEventListener('click', () => {
  if (!monitoring) fetchStatus();
});

function fetchStatus() {
  fetch('/api/scan')
    .then(response => response.json())
    .then(data => {
      // Update timestamp and system status
      document.getElementById('ids-timestamp').textContent =
        new Date(data.timestamp).toLocaleTimeString();
      document.querySelector('.system-status .status-badge').textContent = 
        monitoring ? 'Active Monitoring' : 'Idle';

      // Update Network Protection card
      const netCard = document.querySelector('.network-protection');
      const statusBadge = netCard.querySelector('.status-badge');
      const deviceCount = document.getElementById('device-count');

      if (data.spoofing) {
        netCard.querySelector('h2').textContent = 'ARP Spoofing Detected!';
        // List the suspicious MAC addresses
        const suspiciousMACs = Object.keys(data.suspicious).join(', ') || 'None';
        statusBadge.innerHTML = `Suspicious MACs: ${suspiciousMACs}`;
        statusBadge.style.color = 'var(--danger)';
      } else {
        netCard.querySelector('h2').textContent = 'Network Protection';
        statusBadge.textContent = `Devices: ${data.devices}`;
        statusBadge.style.color = '';
      }
      deviceCount.textContent = data.devices;

      // Update ARP table
      const tbody = document.getElementById('alerts-body');
      if (data.entries && data.entries.length) {
        tbody.innerHTML = data.entries.map(entry => {
          // Check if the entry's MAC is suspicious
          const isSuspicious = Object.keys(data.suspicious).includes(entry.mac);
          return `
            <tr>
              <td>${entry.ip}</td>
              <td>${entry.mac}</td>
              <td>${entry.type}</td>
              <td>
                ${isSuspicious 
                  ? '<span class="status-badge" style="color: var(--danger)">Suspicious</span>' 
                  : '<span class="status-badge" style="color: var(--success)">Normal</span>'}
              </td>
            </tr>
          `;
        }).join('');
      } else {
        tbody.innerHTML = '<tr><td colspan="4" class="no-alerts">No devices found</td></tr>';
      }
    })
    .catch(err => console.error('Fetch error:', err));
}
