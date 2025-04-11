#!/usr/bin/env python3
import json
from datetime import datetime
from ids import get_arp_table, parse_arp_table, detect_arp_spoofing

def run_scan():
    arp_out    = get_arp_table()
    entries    = parse_arp_table(arp_out)
    suspicious = detect_arp_spoofing(entries)
    result = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "devices": len(entries),
        "entries": entries,
        "spoofing": bool(suspicious),
        "suspicious": suspicious
    }
    print(json.dumps(result))

if __name__ == "__main__":
    run_scan()
