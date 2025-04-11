# 🛡️ SpoofShield - Lightweight Intrusion Detection System (IDS)

> Real-time network monitoring and ARP spoofing detection with Discord alerts.  
> Designed for proactive defense using Python + Node.js UI.

---

![Screenshot 2025-04-11 082636](https://github.com/user-attachments/assets/4e895930-cd46-4ce1-9df5-3849b21c77fa)

## 📌 Overview

**SpoofShield** is a lightweight **Intrusion Detection System (IDS)** tailored for small networks and personal setups. It detects suspicious behavior like **ARP spoofing** and monitors your local network in real time. SpoofShield acts as your first line of defense against Man-in-the-Middle (MITM) attacks and helps you stay informed with detailed updates sent directly to **Discord**.

---



## 🎯 Key Features

- 🛡️ **Lightweight IDS** focused on local network integrity
- 🔍 **ARP table monitoring** for unusual activity
- 🚨 **MITM / ARP spoofing detection**
- 🖥️ **Web-based UI with Node.js**
- 📬 **Discord webhook alerts and periodic updates**
- 🧠 Designed for easy deployment in home labs or small office setups

---

## 🧰 Tech Stack

| Component   | Technology         |
|------------|--------------------|
| Backend     | Python 3.x         |
| Frontend UI | Node.js / Express  |
| Notifications | Discord Webhooks |
| Platform Support | Windows (currently) |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/spoofshield.git
cd spoofshield
```

### 2. Python Setup

Install dependencies:

```bash
pip install requests
```

Update these values in `spoofshield.py`:

```python
WEBHOOK_URL = "https://discord.com/api/webhooks/your-webhook-url"
SUBNET_PREFIX = "172.20.10."  # Adjust for your local subnet
```

### 3. Start the IDS Engine

```bash
python spoofshield.py
```

You’ll see a banner and log output showing scans every 60 seconds.

---

## 🌐 Node.js Frontend UI

Optional web interface for visualizing alerts and connected devices.

### 1. Navigate to UI Directory

```bash
cd spoofshield-ui  # Adjust if the folder is named differently
npm install
```

### 2. Start the Web Server

```bash
npm start
```

Visit `http://localhost:3000` to interact with the SpoofShield dashboard.

---

## 🔍 How It Works

1. Runs periodic scans of the ARP table using `arp -a`
2. Extracts and normalizes device IP and MAC info
3. Detects if a **MAC address is shared by multiple IPs**
4. Sends Discord alerts for:
   - ARP spoofing attempts
   - Clean status reports (optional)
5. Frontend UI displays basic logs and scan history

---

## 📡 Sample Alert

```
🚨 ALERT: ARP SPOOFING DETECTED!
Suspicious IPs sharing gateway MAC: 172.20.10.4, 172.20.10.8
Gateway IP: 172.20.10.1
Timestamp: 2025-04-11 15:23:45
```

---

## 🛡️ Why Use SpoofShield?

✅ Quick setup  
✅ Lightweight and low-resource  
✅ Great for home networks and beginner infosec projects  
✅ Extendable for more IDS capabilities

---

## 📜 License

MIT License

---

## ✨ Credits

Built by **c1ph3r1337** 😎🔥  
Drop a star ⭐ if you find this helpful or want more open-source security tools!

---
