---
title: "Office Stationery Ordering System"
description: "An Odoo 10 module for office stationery requests: item and department masters, an approval flow, stock validation, plus PDF and Excel reports."
category: "System Dev"
kind: "individual"
role: "Solo Developer"
period: "2026"
tech: ["Odoo 10", "Python", "PostgreSQL", "XML/QWeb", "report_xlsx"]
repo: "https://github.com/anzaniy/PemesananATK"
gallery:
  - "/images/projects/pemesanan-atk-1.png"
  - "/images/projects/pemesanan-atk-2.png"
  - "/images/projects/pemesanan-atk-3.png"
order: 3
---

## Overview

Office Stationery Ordering System is an Odoo 10 module for office stationery requests. The module manages item and department masters, records request transactions along with their item lines, runs the approval flow, and provides PDF and Excel reports.

## Background

Stationery requests in many teams are still handled through chat or spreadsheets, so stock is not controlled and there is no trace of who approved what. This module makes the flow explicit and recorded inside the system.

## My Role

- Designed the Odoo data model: items, departments, transactions, transaction lines, and the recap wizard.
- Implemented the Draft, Submitted, Approved, and Rejected status flow with action buttons per group.
- Built quantity validation against stock, including a re-check when the item is changed.
- Set up User and Manager access groups plus record rules per data owner.
- Built QWeb-based PDF reports, per-transaction Excel reports, and an Excel recap per status with a date range.
- Wrote the module installation and usage documentation.

## Features

- **Item master**: name, stock, price, and active/inactive status.
- **Department master**: list of requesting departments.
- **Transactions**: header and item lines, with totals calculated automatically.
- **Approval flow**: Draft, Submitted, Approved, and Rejected.
- **Stock validation**: the requested quantity cannot exceed the recorded stock.
- **Access control**: User and Manager groups, with users only seeing their own requests.
- **PDF report**: per transaction, built with QWeb.
- **Excel report**: an `.xlsx` file per transaction through the OCA `report_xlsx` module.
- **Excel recap**: a recap per status within a given date range.

## Tech Stack

| Area | Technology |
| --- | --- |
| Platform | Odoo 10 |
| Language | Python |
| Database | PostgreSQL |
| Interface | XML (Odoo views) |
| Reporting | QWeb and `report_xlsx` |
| License | LGPL-3 |

## Transaction Flow

1. The manager fills in the stationery item master and the department master.
2. A user creates a transaction, adds item lines, then presses **Submit**.
3. The quantity is validated against the recorded stock.
4. The manager approves or rejects the request.
5. Approved transactions can be printed as PDF or Excel, and recapped per status.

## Notes

This module was built as an individual project and is not tied to any company module. Installation requires Odoo 10 and version 10.0 of the OCA `report_xlsx` module. The database after installation is still empty, so item and department masters need to be filled in first.