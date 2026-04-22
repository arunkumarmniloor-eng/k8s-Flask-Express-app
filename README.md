Multi-Stack CI/CD Pipeline: Flask & Express Deployment

📋 Project Overview
This project demonstrates a robust, automated deployment of a dual-stack application on a single Amazon EC2 instance. It features a Flask (Python) backend and an Express (Node.js) frontend. The entire lifecycle—from code commit to production—is managed via Jenkins CI/CD pipelines, with PM2 ensuring high availability of the services.

🏗 Architecture Diagram Description
The deployment follows a standard Cloud-Native CI/CD architecture:
Developer Tier: Code is pushed to GitHub.
Orchestration Tier: GitHub triggers a Jenkins Webhook. Jenkins pulls the code and executes the Jenkinsfile logic.
Application Tier (EC2):
Jenkins (Port 8080) orchestrates the build.
Flask App (Port 5000) runs within a dedicated Python Virtual Environment.
Express App (Port 3000) runs via Node.js.
Management Tier: PM2 monitors both apps, ensuring they auto-restart on crashes or system reboots.
External Access: AWS Security Groups act as a firewall, allowing traffic only on specific ports (22, 8080, 5000, 3000).

🚀 Setup & Installation

1. Instance Provisioning
OS: Ubuntu 24.04 LTS (AWS Free Tier)
Security Group Rules:
SSH (22), Jenkins (8080), Flask (5000), Express (3000).

2. Core Dependency Installation
bash
sudo apt update
sudo apt install -y python3-pip python3-venv python3-full nodejs npm git
sudo npm install -g pm2
Use code with caution.

3. Jenkins Permissions
To allow Jenkins to restart the applications, the jenkins user was added to the sudoers list:
bash
echo "jenkins ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/jenkins
Use code with caution.
🛠 CI/CD Pipeline Configuration
Flask Pipeline (Python)
Dependency Management: Uses python3 -m venv to isolate libraries.
Deployment: Executed via PM2 using the specific interpreter path:
pm2 start app.py --name flask-app --interpreter ./venv/bin/python3
Express Pipeline (Node.js)
Dependency Management: Standard npm install.
Deployment: Managed via PM2:
pm2 start app.js --name express-app
🌐 Application Access
Replace <EC2_IP> with your instance's public IP:
Flask API: http://<EC2_IP>:5000
Express Web: http://<EC2_IP>:3000
📸 Evidence of Successful Deployment
(Instructions for submission: Replace these placeholders with your screenshots)
1. Jenkins Pipeline Success
2. Running Services (PM2 Status)
3. Live Browser Access
   
Author: Arun Kumar M
Project: CI/CD Deployment Assignment
Date: April 2024
