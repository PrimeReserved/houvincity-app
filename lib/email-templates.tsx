// lib/email-templates.tsx

interface CustomerReceiptProps {
  customerName: string;
  propertyTitle: string;
  propertyLocation: string;
  propertySize: string;
  totalPropertyPrice: number;
  amountPaid: number;
  remainingBalance: number;
  paymentType: string;
  reference: string;
  paymentDate: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}

export const CustomerReceiptEmail = ({
  customerName,
  propertyTitle,
  propertyLocation,
  propertySize,
  totalPropertyPrice,
  amountPaid,
  remainingBalance,
  paymentType,
  reference,
  paymentDate,
  email,
  phone,
  address,
  city,
  state,
}: CustomerReceiptProps) => {
  const formattedDate = new Date(paymentDate).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Receipt - Houvin City Limited</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Payment Receipt</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px;">Houvin City Limited</p>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #f8f9fa;">
              <div style="background-color: #d4edda; border: 2px solid #c3e6cb; border-radius: 8px; padding: 15px; display: inline-block;">
                <p style="margin: 0; color: #155724; font-size: 18px; font-weight: bold;">✓ Payment Successful</p>
              </div>
            </td>
          </tr>

          <!-- Customer Info -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #333; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Customer Information</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #666; font-size: 14px; width: 40%;"><strong>Name:</strong></td>
                  <td style="color: #333; font-size: 14px;">${customerName}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Email:</strong></td>
                  <td style="color: #333; font-size: 14px;">${email}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Phone:</strong></td>
                  <td style="color: #333; font-size: 14px;">${phone}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Address:</strong></td>
                  <td style="color: #333; font-size: 14px;">${address}, ${city}, ${state}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Property Info -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #333; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Property Details</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #666; font-size: 14px; width: 40%;"><strong>Property:</strong></td>
                  <td style="color: #333; font-size: 14px;">${propertyTitle}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Location:</strong></td>
                  <td style="color: #333; font-size: 14px;">${propertyLocation}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Size:</strong></td>
                  <td style="color: #333; font-size: 14px;">${propertySize} sqm</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Total Price:</strong></td>
                  <td style="color: #333; font-size: 14px; font-weight: bold;">₦${totalPropertyPrice.toLocaleString()}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Payment Info -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #333; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Payment Information</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #666; font-size: 14px; width: 40%;"><strong>Payment Type:</strong></td>
                  <td style="color: #333; font-size: 14px;">${paymentType === 'full' ? 'Full Payment' : 'Installment Payment'}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Amount Paid:</strong></td>
                  <td style="color: #28a745; font-size: 18px; font-weight: bold;">₦${amountPaid.toLocaleString()}</td>
                </tr>
                ${
                  remainingBalance > 0
                    ? `
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Remaining Balance:</strong></td>
                  <td style="color: #dc3545; font-size: 16px; font-weight: bold;">₦${remainingBalance.toLocaleString()}</td>
                </tr>
                `
                    : ''
                }
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Reference:</strong></td>
                  <td style="color: #333; font-size: 14px; font-family: monospace;">${reference}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Date:</strong></td>
                  <td style="color: #333; font-size: 14px;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 14px;"><strong>Status:</strong></td>
                  <td>
                    <span style="background-color: #28a745; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold;">COMPLETED</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Next Steps -->
          ${
            remainingBalance > 0
              ? `
          <tr>
            <td style="padding: 20px 30px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
              <h3 style="margin: 0 0 10px 0; color: #856404; font-size: 16px;">📋 Next Steps</h3>
              <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.6;">
                You have a remaining balance of <strong>₦${remainingBalance.toLocaleString()}</strong>. 
                Please contact us to arrange payment or schedule an inspection.
              </p>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Contact Info -->
          <tr>
            <td style="padding: 30px; background-color: #f8f9fa;">
              <h3 style="margin: 0 0 15px 0; color: #333; font-size: 18px; text-align: center;">Need Help?</h3>
              <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-align: center;">
                Contact us for any questions about your payment or property
              </p>
              <div style="text-align: center; margin-top: 15px;">
                <a href="mailto:info@houvincity.com" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #667eea; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">Email Us</a>
                <a href="tel:+2348112345555" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">Call Us</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #333; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px; font-weight: bold;">Houvin City Limited</p>
              <p style="margin: 0; color: #cccccc; font-size: 12px;">
                Port Harcourt, Rivers State, Nigeria
              </p>
              <p style="margin: 10px 0 0 0; color: #cccccc; font-size: 12px;">
                © ${new Date().getFullYear()} Houvin City Limited. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

// Company Notification Email
interface CompanyNotificationProps extends CustomerReceiptProps {
  company?: string;
}

export const CompanyNotificationEmail = ({
  customerName,
  email,
  phone,
  address,
  city,
  state,
  company,
  propertyTitle,
  propertyLocation,
  propertySize,
  totalPropertyPrice,
  amountPaid,
  remainingBalance,
  paymentType,
  reference,
  paymentDate,
}: CompanyNotificationProps) => {
  const formattedDate = new Date(paymentDate).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Property Payment - Admin Notification</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">🎉 New Property Payment Received</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px;">Admin Notification</p>
            </td>
          </tr>

          <!-- Alert Box -->
          <tr>
            <td style="padding: 20px 30px;">
              <div style="background-color: #d1ecf1; border: 2px solid #bee5eb; border-radius: 8px; padding: 15px;">
                <p style="margin: 0; color: #0c5460; font-size: 16px;">
                  <strong>Amount Received:</strong> <span style="font-size: 20px; color: #28a745;">₦${amountPaid.toLocaleString()}</span>
                </p>
                <p style="margin: 5px 0 0 0; color: #0c5460; font-size: 14px;">
                  <strong>Payment Type:</strong> ${paymentType === 'full' ? '✓ Full Payment' : '⚠️ Installment Payment'}
                </p>
              </div>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 15px 0; color: #333; font-size: 18px; border-bottom: 2px solid #28a745; padding-bottom: 8px;">👤 Customer Details</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="background-color: #f8f9fa; border-radius: 5px;">
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px; width: 35%;"><strong>Full Name:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${customerName}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Email:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Phone:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">
                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${
                  company
                    ? `
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Company:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${company}</td>
                </tr>
                `
                    : ''
                }
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Address:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${address}, ${city}, ${state}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Property Details -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 15px 0; color: #333; font-size: 18px; border-bottom: 2px solid #28a745; padding-bottom: 8px;">🏠 Property Details</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="background-color: #f8f9fa; border-radius: 5px;">
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px; width: 35%;"><strong>Property:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${propertyTitle}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Location:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${propertyLocation}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Size:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${propertySize} sqm</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Total Price:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px; font-weight: bold;">₦${totalPropertyPrice.toLocaleString()}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Payment Breakdown -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 15px 0; color: #333; font-size: 18px; border-bottom: 2px solid #28a745; padding-bottom: 8px;">💰 Payment Breakdown</h2>
              <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f8f9fa; border-radius: 5px;">
                <tr>
                  <td style="color: #666; font-size: 14px; width: 50%;"><strong>Total Property Price:</strong></td>
                  <td style="color: #333; font-size: 14px; text-align: right;">₦${totalPropertyPrice.toLocaleString()}</td>
                </tr>
                <tr style="background-color: #d4edda;">
                  <td style="color: #155724; font-size: 16px; padding: 12px;"><strong>Amount Paid:</strong></td>
                  <td style="color: #155724; font-size: 16px; text-align: right; font-weight: bold; padding: 12px;">₦${amountPaid.toLocaleString()}</td>
                </tr>
                ${
                  remainingBalance > 0
                    ? `
                <tr style="background-color: #f8d7da;">
                  <td style="color: #721c24; font-size: 14px; padding: 12px;"><strong>Remaining Balance:</strong></td>
                  <td style="color: #721c24; font-size: 14px; text-align: right; font-weight: bold; padding: 12px;">₦${remainingBalance.toLocaleString()}</td>
                </tr>
                `
                    : `
                <tr style="background-color: #d4edda;">
                  <td colspan="2" style="color: #155724; font-size: 14px; text-align: center; padding: 12px;">
                    ✓ <strong>FULLY PAID</strong>
                  </td>
                </tr>
                `
                }
              </table>
            </td>
          </tr>

          <!-- Transaction Info -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 15px 0; color: #333; font-size: 18px; border-bottom: 2px solid #28a745; padding-bottom: 8px;">📊 Transaction Details</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="background-color: #f8f9fa; border-radius: 5px;">
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px; width: 35%;"><strong>Reference:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px; font-family: monospace;">${reference}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Payment Date:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="color: #666; font-size: 13px; padding: 10px;"><strong>Payment Gateway:</strong></td>
                  <td style="color: #333; font-size: 13px; padding: 10px;">Paystack</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Required -->
          ${
            remainingBalance > 0
              ? `
          <tr>
            <td style="padding: 20px 30px;">
              <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 5px;">
                <h3 style="margin: 0 0 8px 0; color: #856404; font-size: 16px;">⚠️ Action Required</h3>
                <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.5;">
                  This is an <strong>installment payment</strong>. Follow up with the customer to collect the remaining balance of <strong>₦${remainingBalance.toLocaleString()}</strong>.
                </p>
              </div>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8f9fa; text-align: center; border-top: 2px solid #dee2e6;">
              <p style="margin: 0; color: #666; font-size: 12px;">
                This is an automated notification from your property payment system.
              </p>
              <p style="margin: 5px 0 0 0; color: #999; font-size: 11px;">
                Houvin City Limited - Admin Panel
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
