# 🛡️ SpoofShield - ARP Spoofing Detection Tool

> Real-time ARP spoofing detection and network monitoring with Discord webhook alerts 🚨  
> Built using **Python** for backend monitoring and **Node.js** for the user interface.

---

## 📌 Overview

**SpoofShield** is a lightweight Intrusion Detection System (IDS) focused on identifying **ARP spoofing** attacks within a local network. It actively scans your network's ARP table, detects anomalies (like multiple IPs mapped to a single MAC address), and sends detailed alerts to a specified **Discord webhook**.

---

## 🚀 Features

- 🔍 **Real-time ARP scanning**
- 🚨 **Detects ARP spoofing / MITM attempts**
- 📡 **Filters results by subnet (default: `172.20.10.*`)**
- 📬 **Sends alerts and updates to a Discord webhook**
- 🌐 **User interface built with Node.js**

---

## 🛠️ Technologies Used

| Component | Tech Stack |
|----------|-------------|
| Backend  | Python 3.x  |
| Frontend | Node.js     |
| Notifications | Discord Webhooks |
| OS Compatibility | Windows (uses `arp -a` command) |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/spoofshield.git
cd spoofshield
```

### 2. Python Environment

Make sure you have **Python 3** installed.

Install required libraries:

```bash
pip install requests
```

### 3. Configure Webhook and Subnet

Edit the following lines in the script:

```python
WEBHOOK_URL = "https://discord.com/api/webhooks/your-webhook-url"
SUBNET_PREFIX = "172.20.10."  # Adjust to match your local network subnet
```

### 4. Start the Python Script

```bash
python spoofshield.py
```

You’ll see a banner and then continuous monitoring with updates every minute.

---

## 🌐 Node.js UI (Optional)

A web interface for visualizing alerts and network status.

### 1. Install Dependencies

```bash
cd spoofshield-ui  # Assuming UI is in a separate folder
npm install
```

### 2. Run the Server

```bash
npm start
```

Visit `http://localhost:3000` to access the SpoofShield UI.

---

## 🧠 How It Works

1. Runs `arp -a` command periodically to gather the ARP table.
2. Parses entries filtering by a specific subnet.
3. Detects **MAC address duplication** across multiple IPs.
4. If spoofing is suspected:
   - Sends a Discord alert with timestamp and full ARP table.
5. If no issues:
   - Sends a periodic status update.

---

## 📸 Sample Output (Discord Alert)

```
🚨 ALERT: ARP SPOOFING DETECTED!
Suspicious IPs sharing gateway MAC: 172.20.10.7, 172.20.10.9
Gateway IP: 172.20.10.1
Timestamp: 2025-04-11 12:30:45

ARP Table:
IP Address      MAC Address           Type
--------------------------------------------------
172.20.10.1     00-11-22-33-44-55     dynamic
172.20.10.7     00-11-22-33-44-55     dynamic
172.20.10.9     00-11-22-33-44-55     dynamic
```

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Made with ❤️ by **c1ph3r1337**

---
```

Let me know if you'd like to include screenshots or want a `spoofshield-ui` template structure in the repo too!
