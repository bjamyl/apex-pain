import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// TypeScript interfaces
interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  needs: string;
  message: string;
}

type ServiceType = 'emergency' | 'consultation' | 'appointment' | 'general' | 'other';

// Beautiful HTML email template
const createEmailTemplate = (
  fullName: string, 
  email: string, 
  phone: string, 
  needs: string, 
  message: string
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8fafc;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            padding: 30px 40px;
            text-align: center;
            color: white;
        }
        
        .logo-container {
            margin-bottom: 20px;
        }
        
        .logo {
            height: 60px;
            width: auto;
            max-width: 200px;
            object-fit: contain;
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.025em;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 40px;
        }
        
        .alert-banner {
            background: #fef3c7;
            border: 1px solid #fbbf24;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .alert-icon {
            width: 20px;
            height: 20px;
            color: #d97706;
        }
        
        .alert-text {
            font-size: 14px;
            color: #92400e;
            font-weight: 500;
        }
        
        .info-grid {
            display: grid;
            gap: 24px;
            margin-bottom: 30px;
        }
        
        .info-item {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #10b981;
        }
        
        .info-label {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #6b7280;
            margin-bottom: 6px;
        }
        
        .info-value {
            font-size: 16px;
            font-weight: 500;
            color: #111827;
            word-break: break-word;
        }
        
        .message-section {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 24px;
            margin-top: 20px;
        }
        
        .message-label {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .message-content {
            font-size: 15px;
            line-height: 1.7;
            color: #4b5563;
            white-space: pre-wrap;
            background: #f9fafb;
            padding: 16px;
            border-radius: 6px;
            border-left: 3px solid #10b981;
        }
        
        .priority-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .priority-high {
            background: #fee2e2;
            color: #dc2626;
        }
        
        .priority-medium {
            background: #fef3c7;
            color: #d97706;
        }
        
        .priority-low {
            background: #dcfce7;
            color: #16a34a;
        }
        
        .footer {
            background: #f8fafc;
            padding: 30px 40px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        
        .footer-text {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 12px;
        }
        
        .company-info {
            font-size: 13px;
            color: #9ca3af;
        }
        
        .action-buttons {
            margin: 24px 0;
            text-align: center;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 24px;
            margin: 0 8px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            transition: all 0.2s ease;
        }
        
        .btn-primary {
            background: #10b981;
            color: white;
        }
        
        .btn-secondary {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
        }
        
        .timestamp {
            font-size: 12px;
            color: #9ca3af;
            text-align: right;
            margin-top: 20px;
            padding-top: 16px;
            border-top: 1px solid #f3f4f6;
        }
        
            @media (max-width: 640px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .header, .content, .footer {
                padding: 20px;
            }
            
            .logo {
                height: 45px;
                max-width: 150px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .info-grid {
                gap: 16px;
            }
            
            .info-item {
                padding: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo-container">
                <img src="https://www.apex-pain.com/apex-pain-white.png" alt="Apex Pain Management" class="logo">
            </div>
            <h1>New Contact Request</h1>
            <p>Someone has reached out through your website</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Alert Banner -->
            <div class="alert-banner">
                <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="alert-text">New contact form submission requires attention</span>
            </div>
            
            <!-- Contact Information Grid -->
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${fullName}</div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Email Address</div>
                    <div class="info-value">
                        <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Phone Number</div>
                    <div class="info-value">
                        <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Service Needed</div>
                    <div class="info-value">
                        ${needs}
                        ${getPriorityBadge(needs)}
                    </div>
                </div>
            </div>
            
            <!-- Message Section -->
            <div class="message-section">
                <div class="message-label">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
                    </svg>
                    Message Details
                </div>
                <div class="message-content">${message}</div>
            </div>
            
            <!-- Action Buttons -->
            <div class="action-buttons">
                <a href="mailto:${email}" class="btn btn-primary">Reply to Client</a>
                <a href="tel:${phone}" class="btn btn-secondary">Call Client</a>
            </div>
            
            <!-- Timestamp -->
            <div class="timestamp">
                Received: ${new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                })}
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                This message was sent through your website contact form
            </div>
            <div class="company-info">
                Apex Interventional Pain Specialists<br>
                840 Hammond St. STE 2, Bangor, ME 04401<br>
                +1 207-830-2739 | info@apex-pain.com
            </div>
        </div>
    </div>
</body>
</html>
  `;
};

// Helper function to determine priority badge based on needs
const getPriorityBadge = (needs: string): string => {
  const priorityMap: Record<ServiceType, string> = {
    'emergency': '<span class="priority-badge priority-high">High Priority</span>',
    'consultation': '<span class="priority-badge priority-medium">Medium Priority</span>',
    'appointment': '<span class="priority-badge priority-medium">Medium Priority</span>',
    'general': '<span class="priority-badge priority-low">Low Priority</span>',
    'other': '<span class="priority-badge priority-low">Low Priority</span>'
  };
  
  return priorityMap[needs as ServiceType] || '<span class="priority-badge priority-low">Low Priority</span>';
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: ContactFormData = await req.json();
    const { fullName, email, phone, needs, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    // Create the beautiful HTML email
    const htmlContent: string = createEmailTemplate(fullName, email, phone, needs, message);
    
    // Create a clean text fallback
    const textContent: string = `
New Contact Request from ${fullName}

Contact Details:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Service Needed: ${needs}

Message:
${message}

Received: ${new Date().toLocaleString()}

---
Apex Interventional Pain Specialists
840 Hammond St. STE 2, Bangor, ME 04401
+1 207-830-2739 | info@apex-pain.com
    `.trim();

    await transporter.sendMail({
      from: `"Apex Interventional Pain Specialists" <${process.env.SMTP_USERNAME!}>`, 
      to: process.env.MAIL_RECEIVER_ADDRESS!,
      replyTo: email, // Client's email for replies
      subject: `Contact Form Submission from ${fullName}`,
      text: textContent, // Plain text fallback
      html: htmlContent, // Beautiful HTML version
      headers: {
        'X-Priority': '1', // High priority
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}