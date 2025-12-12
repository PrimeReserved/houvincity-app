'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import YoutubeEmbed from './YoutubeEmbed';
import { Property } from '@/typings';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../Blog/Cards/RichTextComponents';
import Loading from '@/app/loading';
import Link from 'next/link';
import { urlForImage, urlForFile } from '@/sanity/lib/image';
import {
  FiDownload,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
  FiInfo,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import {
  generatePaymentReference,
  getUserPaymentStatus,
  formatCurrency,
  calculatePercentagePaid,
} from '@/utils/paymentTracking';

// Declare PaystackPop type
declare global {
  interface Window {
    PaystackPop: any;
  }
}

interface PropertyDetailedProps {
  property: Property;
}

// Custom Alert Component
interface CustomAlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose: () => void;
}

function CustomAlert({ type, message, onClose }: CustomAlertProps) {
  const configs = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: <FiCheckCircle className="w-5 h-5 text-green-500" />,
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <FiAlertCircle className="w-5 h-5 text-red-500" />,
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: <FiAlertCircle className="w-5 h-5 text-yellow-500" />,
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <FiInfo className="w-5 h-5 text-blue-500" />,
    },
  };

  const config = configs[type];

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[9100] w-full max-w-md px-4 animate-slideDown">
      <div
        className={`${config.bg} ${config.border} border-2 rounded-lg p-4 shadow-lg flex items-start gap-3`}
      >
        <div className="flex-shrink-0 mt-0.5">{config.icon}</div>
        <div className={`flex-1 ${config.text} text-sm font-medium`}>
          {message}
        </div>
        <button
          onClick={onClose}
          className={`${config.text} hover:opacity-70 transition flex-shrink-0`}
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function PropertyDetailed({ property }: Readonly<PropertyDetailedProps>) {
  const router = useRouter();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paystackReady, setPaystackReady] = useState(false);
  const [paymentType, setPaymentType] = useState<'full' | 'installment'>(
    'full'
  );
  const [customAmount, setCustomAmount] = useState('');
  const [paymentData, setPaymentData] = useState({
    email: '',
    name: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
  });
  const [alert, setAlert] = useState<{
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
  } | null>(null);

  // Fullscreen image viewer state
  const [fullscreenImage, setFullscreenImage] = useState<{
    isOpen: boolean;
    currentIndex: number;
  }>({
    isOpen: false,
    currentIndex: 0,
  });

  // NEW: Payment tracking state
  const [paymentStatus, setPaymentStatus] = useState<{
    totalPaid: number;
    remainingBalance: number;
    paymentHistory: any[];
    hasExistingPayments: boolean;
    isLoading: boolean;
  }>({
    totalPaid: 0,
    remainingBalance: 0,
    paymentHistory: [],
    hasExistingPayments: false,
    isLoading: false,
  });

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_URL || '';
  const propertyAmount = property.budget
    ? parseFloat(property.budget.replace(/,/g, ''))
    : 0;

  // Calculate amounts based on existing payments
  const actualRemainingBalance = paymentStatus.hasExistingPayments
    ? paymentStatus.remainingBalance
    : propertyAmount;

  const amountToPay =
    paymentType === 'full'
      ? actualRemainingBalance
      : customAmount
        ? parseFloat(customAmount)
        : 0;

  const newRemainingBalance = actualRemainingBalance - amountToPay;

  // Show alert helper
  const showAlert = (
    type: 'success' | 'error' | 'warning' | 'info',
    message: string
  ) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  // Get all available images for fullscreen viewer
  const getAllImages = () => {
    const images = [];
    if (property?.fullPropertyImage) {
      images.push({
        url: urlForImage(property.fullPropertyImage.asset._ref),
        alt: 'Full Property Image',
      });
    }
    if (property?.leftSidePropertyImage) {
      images.push({
        url: urlForImage(property.leftSidePropertyImage.asset._ref),
        alt: 'Left Side View',
      });
    }
    if (property?.middlePropertyImage) {
      images.push({
        url: urlForImage(property.middlePropertyImage.asset._ref),
        alt: 'Middle View',
      });
    }
    if (property?.rightSidePropertyImage) {
      images.push({
        url: urlForImage(property.rightSidePropertyImage.asset._ref),
        alt: 'Right Side View',
      });
    }
    return images;
  };

  // Fullscreen image handlers
  const openFullscreen = (index: number) => {
    setFullscreenImage({ isOpen: true, currentIndex: index });
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenImage({ isOpen: false, currentIndex: 0 });
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const images = getAllImages();
    setFullscreenImage((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % images.length,
    }));
  };

  const prevImage = () => {
    const images = getAllImages();
    setFullscreenImage((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0 ? images.length - 1 : prev.currentIndex - 1,
    }));
  };

  // NEW: Fetch payment status when email is entered
  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (
        paymentData.email &&
        paymentData.email.includes('@') &&
        property._id
      ) {
        setPaymentStatus((prev) => ({ ...prev, isLoading: true }));

        try {
          const status = await getUserPaymentStatus(
            paymentData.email,
            property._id
          );
          setPaymentStatus({
            totalPaid: status.totalPaid,
            remainingBalance: status.remainingBalance,
            paymentHistory: status.paymentHistory,
            hasExistingPayments: status.hasExistingPayments,
            isLoading: false,
          });

          if (status.hasExistingPayments) {
            showAlert(
              'info',
              `Found ${status.paymentHistory.length} previous payment(s). Balance: ${formatCurrency(status.remainingBalance)}`
            );
          }
        } catch (error) {
          console.error('Error fetching payment status:', error);
          setPaymentStatus((prev) => ({ ...prev, isLoading: false }));
        }
      }
    };

    // Debounce the API call
    const timeoutId = setTimeout(fetchPaymentStatus, 800);
    return () => clearTimeout(timeoutId);
  }, [paymentData.email, property._id]);

  // Check if Paystack is loaded
  useEffect(() => {
    const checkPaystack = () => {
      if (typeof window !== 'undefined' && window.PaystackPop) {
        console.log('✅ Paystack loaded successfully');
        setPaystackReady(true);
        return true;
      }
      return false;
    };

    if (checkPaystack()) return;

    const maxAttempts = 50;
    let attempts = 0;

    const interval = setInterval(() => {
      attempts++;
      if (checkPaystack()) {
        clearInterval(interval);
      } else if (attempts >= maxAttempts) {
        console.error('❌ Paystack failed to load after 5 seconds');
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentData({ ...paymentData, [field]: e.target.value });
    };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
    }
  };

  const handlePaymentTypeChange = (type: 'full' | 'installment') => {
    setPaymentType(type);
    if (type === 'full') {
      setCustomAmount('');
    }
  };

  const handlePayNow = () => {
    console.log('🔍 Payment initiated - debugging info:');
    console.log('Paystack ready:', paystackReady);
    console.log('PaystackPop exists:', !!window.PaystackPop);
    console.log('Public key exists:', !!publicKey);
    console.log('Amount to pay:', amountToPay);
    console.log('Payment type:', paymentType);
    console.log('Has existing payments:', paymentStatus.hasExistingPayments);
    console.log('Total already paid:', paymentStatus.totalPaid);

    if (!paystackReady || !window.PaystackPop) {
      showAlert(
        'error',
        'Payment system is not ready. Please refresh the page and try again.'
      );
      return;
    }

    if (!publicKey || publicKey.length < 10) {
      showAlert(
        'error',
        'Payment configuration error. Please contact support.'
      );
      return;
    }

    if (!amountToPay || amountToPay <= 0) {
      showAlert('warning', 'Please enter a valid payment amount');
      return;
    }

    if (amountToPay > actualRemainingBalance) {
      showAlert(
        'warning',
        `Amount cannot exceed remaining balance of ${formatCurrency(actualRemainingBalance)}`
      );
      return;
    }

    if (
      paymentType === 'installment' &&
      amountToPay >= actualRemainingBalance
    ) {
      showAlert(
        'warning',
        'Installment amount must be less than the remaining balance'
      );
      return;
    }

    try {
      console.log('🚀 Initializing Paystack handler...');

      // Generate unique reference code with user email
      const paymentReference = generatePaymentReference(
        property.slug?.current || 'property',
        paymentData.email
      );

      const handler = window.PaystackPop.setup({
        key: publicKey,
        email: paymentData.email,
        amount: amountToPay * 100,
        currency: 'NGN',
        ref: paymentReference,
        metadata: {
          custom_fields: [
            {
              display_name: 'Name',
              variable_name: 'name',
              value: paymentData.name,
            },
            {
              display_name: 'Phone',
              variable_name: 'phone',
              value: paymentData.phone,
            },
            {
              display_name: 'Company',
              variable_name: 'company',
              value: paymentData.company,
            },
            {
              display_name: 'Address',
              variable_name: 'address',
              value: paymentData.address,
            },
            {
              display_name: 'City',
              variable_name: 'city',
              value: paymentData.city,
            },
            {
              display_name: 'State',
              variable_name: 'state',
              value: paymentData.state,
            },
            {
              display_name: 'Property',
              variable_name: 'property',
              value: property.title || '',
            },
            {
              display_name: 'Property ID',
              variable_name: 'property_id',
              value: property._id || '',
            },
            {
              display_name: 'Payment Type',
              variable_name: 'payment_type',
              value: paymentType,
            },
            {
              display_name: 'Has Previous Payments',
              variable_name: 'has_previous_payments',
              value: paymentStatus.hasExistingPayments ? 'Yes' : 'No',
            },
            {
              display_name: 'Total Already Paid',
              variable_name: 'total_already_paid',
              value: paymentStatus.totalPaid.toString(),
            },
          ],
        },
        onClose: function () {
          console.log('Payment modal closed');
          showAlert(
            'info',
            "Payment was not completed. You can try again when you're ready."
          );
        },
        callback: function (response: any) {
          console.log('✅ Payment successful!', response);

          fetch('/api/property-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fullname: paymentData.name,
              email: paymentData.email,
              address: paymentData.address,
              city: paymentData.city,
              state: paymentData.state,
              company: paymentData.company,
              phoneNumber: paymentData.phone,
              propertyId: property._id,
              propertyTitle: property.title,
              propertyLocation: property.location,
              propertySize: property.propertySize,
              totalPropertyPrice: propertyAmount,
              amountPaid: amountToPay,
              remainingBalance: newRemainingBalance,
              paymentType: paymentType,
              reference: response.reference,
              status: true,
              paymentDate: new Date().toISOString(),
              // NEW: Include payment tracking data
              previousTotalPaid: paymentStatus.totalPaid,
              hasExistingPayments: paymentStatus.hasExistingPayments,
              paymentNumber: paymentStatus.paymentHistory.length + 1,
            }),
          })
            .then((apiResponse) =>
              apiResponse.json().then((data) => ({ ok: apiResponse.ok, data }))
            )
            .then(({ ok, data }) => {
              if (ok) {
                closeModal();
                showAlert(
                  'success',
                  'Payment successful! Thank you for your purchase.'
                );
                setTimeout(() => {
                  router.push(
                    `/payment-success?reference=${response.reference}`
                  );
                }, 2000);
              } else {
                console.error('API error:', data);
                showAlert(
                  'error',
                  'Payment recorded but there was an issue saving your details. Please contact support.'
                );
              }
            })
            .catch((error) => {
              console.error('Error saving payment:', error);
              showAlert(
                'error',
                'Payment successful but there was an error. Please contact support with your reference: ' +
                  response.reference
              );
            });
        },
      });

      console.log('✅ Handler created, opening iframe...');
      handler.openIframe();
    } catch (error: any) {
      console.error('❌ Error in handlePayNow:', error);
      showAlert(
        'error',
        `Payment Error: ${error?.message || 'Unknown error'}. Check console for details.`
      );
    }
  };

  const handleProceedToPayment = () => {
    if (property.soldOut) {
      showAlert('warning', 'Sorry, this property has been sold out.');
      return;
    }
    setShowPaymentModal(true);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
    setPaymentType('full');
    setCustomAmount('');
  };

  useEffect(() => {
    if (showPaymentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPaymentModal]);

  if (!property) {
    return null;
  }

  const isPaymentValid =
    paymentData.email &&
    paymentData.name &&
    paymentData.phone &&
    paymentData.address &&
    paymentData.city &&
    paymentData.state &&
    paystackReady &&
    amountToPay > 0 &&
    amountToPay <= actualRemainingBalance &&
    (paymentType === 'full' ||
      (paymentType === 'installment' && amountToPay < actualRemainingBalance));

  return (
    <div className="wrapper mb-10">
      {/* Custom Alert */}
      {alert && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {/* Fullscreen Image Viewer */}
      {fullscreenImage.isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[10000] bg-white rounded-full p-3 hover:bg-gray-200 transition"
            aria-label="Close fullscreen"
          >
            <FiX className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 z-[10000] bg-white rounded-full p-3 hover:bg-gray-200 transition"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-20">
            {getAllImages()[fullscreenImage.currentIndex] && (
              <div className="relative">
                <Image
                  src={getAllImages()[fullscreenImage.currentIndex].url}
                  alt={getAllImages()[fullscreenImage.currentIndex].alt}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                />
                <p className="text-white text-center mt-4 text-lg font-semibold">
                  {fullscreenImage.currentIndex + 1} / {getAllImages().length}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 z-[10000] bg-white rounded-full p-3 hover:bg-gray-200 transition"
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      )}

      {/* Add top padding to account for fixed header */}
      <div className="pt-24">
        <div className="flex justify-center items-center px-10 relative group">
          {property?.fullPropertyImage && (
            <Suspense fallback={<Loading />}>
              <div className="relative cursor-pointer" onClick={() => openFullscreen(0)}>
                <Image
                  src={urlForImage(property?.fullPropertyImage?.asset?._ref)}
                  alt="House1"
                  width={1500}
                  height={100}
                />
                <div className="absolute bottom-6 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="bg-primary rounded-full p-3"
                    style={{
                      boxShadow: '0 0 0 3px rgba(255,255,255,0.9), 0 0 20px rgba(0,0,0,0.5), 0 10px 40px rgba(0,0,0,0.6), 0 0 60px rgba(34, 197, 94, 0.4)'
                    }}
                  >
                    <FiMaximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </Suspense>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 px-10 gap-2 justify-center items-center mt-12 mx-auto">
        {property?.leftSidePropertyImage && (
          <Suspense fallback={<Loading />}>
            <div className="relative group cursor-pointer" onClick={() => openFullscreen(1)}>
              <Image
                src={urlForImage(property?.leftSidePropertyImage?.asset?._ref)}
                alt="House2"
                width={385}
                height={300}
              />
              <div className="absolute bottom-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className="bg-primary rounded-full p-2"
                  style={{
                    boxShadow: '0 0 0 3px rgba(255,255,255,0.9), 0 0 20px rgba(0,0,0,0.5), 0 10px 40px rgba(0,0,0,0.6), 0 0 60px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <FiMaximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </Suspense>
        )}
        {property.middlePropertyImage && (
          <Suspense fallback={<Loading />}>
            <div className="relative group cursor-pointer" onClick={() => openFullscreen(2)}>
              <Image
                src={urlForImage(property?.middlePropertyImage.asset._ref)}
                alt="House3"
                width={385}
                height={300}
              />
              <div className="absolute bottom-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className="bg-primary rounded-full p-2"
                  style={{
                    boxShadow: '0 0 0 3px rgba(255,255,255,0.9), 0 0 20px rgba(0,0,0,0.5), 0 10px 40px rgba(0,0,0,0.6), 0 0 60px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <FiMaximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </Suspense>
        )}
        {property.rightSidePropertyImage && (
          <Suspense fallback={<Loading />}>
            <div className="relative group cursor-pointer" onClick={() => openFullscreen(3)}>
              <Image
                src={urlForImage(property?.rightSidePropertyImage.asset._ref)}
                alt="House4"
                width={385}
                height={300}
              />
              <div className="absolute bottom-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className="bg-primary rounded-full p-2"
                  style={{
                    boxShadow: '0 0 0 3px rgba(255,255,255,0.9), 0 0 20px rgba(0,0,0,0.5), 0 10px 40px rgba(0,0,0,0.6), 0 0 60px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <FiMaximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </Suspense>
        )}
      </div>

      <div className="mt-10 px-10">
        <p className="text-customPrimary font-semibold leading-relaxed my-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          {property.location}
        </p>
        <p className="text-primary text-sm leading-relaxed my-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          {property.propertySize} sqm
        </p>
        <p className="text-customPrimary text-2xl font-bold leading-relaxed my-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          ₦{propertyAmount.toLocaleString()}
        </p>
      </div>

      {showPaymentModal && (
        <div className="fixed mt-[5.5rem] inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9050] p-4 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto my-8 mt-24">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-customSecondary">
                Payment Information
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {!paystackReady && (
              <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                ⚠️ Payment system is loading... Please wait.
              </div>
            )}

            {/* NEW: Payment History Display */}
            {paymentStatus.hasExistingPayments && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FiInfo className="w-5 h-5" />
                  Previous Payments Found
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Total Property Price:</span>
                    <span className="font-semibold text-blue-900">
                      {formatCurrency(propertyAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Already Paid:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(paymentStatus.totalPaid)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-200">
                    <span className="text-blue-700 font-medium">
                      Remaining Balance:
                    </span>
                    <span className="font-bold text-orange-600">
                      {formatCurrency(actualRemainingBalance)}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{
                          width: `${calculatePercentagePaid(paymentStatus.totalPaid, propertyAmount)}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 text-center">
                      {calculatePercentagePaid(
                        paymentStatus.totalPaid,
                        propertyAmount
                      )}
                      % paid
                    </p>
                  </div>
                  <details className="mt-3">
                    <summary className="cursor-pointer text-blue-700 hover:text-blue-900 text-xs">
                      View {paymentStatus.paymentHistory.length} previous
                      payment(s)
                    </summary>
                    <div className="mt-2 space-y-2 pl-4">
                      {paymentStatus.paymentHistory.map((payment, index) => (
                        <div
                          key={payment._id}
                          className="text-xs bg-white p-2 rounded border border-blue-100"
                        >
                          <div className="flex justify-between">
                            <span>
                              Payment #
                              {paymentStatus.paymentHistory.length - index}
                            </span>
                            <span className="font-semibold">
                              {formatCurrency(payment.amountPaid)}
                            </span>
                          </div>
                          <div className="text-gray-500 text-[10px]">
                            {new Date(payment.paymentDate).toLocaleDateString()}
                          </div>
                          <div className="text-gray-400 text-[10px] truncate">
                            Ref: {payment.paymentReference}
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            )}

            {/* Email field first to trigger payment status check */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-customSecondary mb-2">
                Email *{' '}
                {paymentStatus.isLoading && (
                  <span className="text-xs text-gray-500">
                    (Checking for previous payments...)
                  </span>
                )}
              </label>
              <input
                type="email"
                placeholder="markjoe@gmail.com"
                className="w-full outline-none border-2 border-gray-300 rounded-md p-3 text-sm focus:border-primary"
                value={paymentData.email}
                onChange={handleInputChange('email')}
                required
              />
            </div>

            {/* Payment Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-customSecondary mb-3">
                Payment Type *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handlePaymentTypeChange('full')}
                  className={`p-4 border-2 rounded-lg transition ${
                    paymentType === 'full'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold text-customSecondary">
                    Full Payment
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Pay {formatCurrency(actualRemainingBalance)}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentTypeChange('installment')}
                  className={`p-4 border-2 rounded-lg transition ${
                    paymentType === 'installment'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold text-customSecondary">
                    Installment Payment
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Pay a custom amount
                  </div>
                </button>
              </div>
            </div>
            {/* Custom Amount Input for Installment */}
            {paymentType === 'installment' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-customSecondary mb-2">
                  Enter Amount to Pay *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
                    ₦
                  </span>
                  <input
                    type="text"
                    placeholder="0"
                    className="w-full outline-none border-2 border-gray-300 rounded-md p-3 pl-8 text-lg font-semibold focus:border-primary"
                    value={
                      customAmount
                        ? parseFloat(customAmount).toLocaleString()
                        : ''
                    }
                    onChange={handleAmountChange}
                  />
                </div>
                {customAmount &&
                  parseFloat(customAmount) > actualRemainingBalance && (
                    <p className="text-red-500 text-sm mt-1">
                      Amount cannot exceed remaining balance of{' '}
                      {formatCurrency(actualRemainingBalance)}
                    </p>
                  )}
                {customAmount &&
                  parseFloat(customAmount) >= actualRemainingBalance &&
                  parseFloat(customAmount) <= actualRemainingBalance && (
                    <p className="text-orange-500 text-sm mt-1">
                      This amount will complete your payment. Consider selecting
                      `&#39;Full Payment`&#39; instead.
                    </p>
                  )}
                {customAmount &&
                  parseFloat(customAmount) > 0 &&
                  parseFloat(customAmount) < actualRemainingBalance && (
                    <div className="mt-2 p-3 bg-blue-50 rounded-md">
                      <p className="text-sm text-gray-600">
                        New Remaining Balance:
                      </p>
                      <p className="text-lg font-bold text-primary">
                        {formatCurrency(newRemainingBalance)}
                      </p>
                    </div>
                  )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-customSecondary mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Mark Joe"
                  className="w-full outline-none border border-gray-300 rounded-md p-3 text-sm"
                  value={paymentData.name}
                  onChange={handleInputChange('name')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customSecondary mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+2348112345555"
                  className="w-full outline-none border border-gray-300 rounded-md p-3 text-sm"
                  value={paymentData.phone}
                  onChange={handleInputChange('phone')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customSecondary mb-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full outline-none border border-gray-300 rounded-md p-3 text-sm"
                  value={paymentData.company}
                  onChange={handleInputChange('company')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customSecondary mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  placeholder="123 Main Street"
                  className="w-full outline-none border border-gray-300 rounded-md p-3 text-sm"
                  value={paymentData.address}
                  onChange={handleInputChange('address')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customSecondary mb-1">
                  City *
                </label>
                <input
                  type="text"
                  placeholder="Port Harcourt"
                  className="w-full outline-none border border-gray-300 rounded-md p-3 text-sm"
                  value={paymentData.city}
                  onChange={handleInputChange('city')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customSecondary mb-1">
                  State *
                </label>
                <input
                  type="text"
                  placeholder="Rivers"
                  className="w-full outline-none border border-gray-300 rounded-md p-3 text-sm"
                  value={paymentData.state}
                  onChange={handleInputChange('state')}
                  required
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600">Total Property Price:</p>
                <p className="text-lg font-semibold text-gray-800">
                  {formatCurrency(propertyAmount)}
                </p>
              </div>
              {paymentStatus.hasExistingPayments && (
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600">Already Paid:</p>
                  <p className="text-md font-semibold text-green-600">
                    -{formatCurrency(paymentStatus.totalPaid)}
                  </p>
                </div>
              )}
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-300">
                <p className="text-sm text-gray-600">Current Balance:</p>
                <p className="text-lg font-semibold text-orange-600">
                  {formatCurrency(actualRemainingBalance)}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Amount to Pay Now:</p>
                <p className="text-2xl font-bold text-customPrimary">
                  {formatCurrency(amountToPay)}
                </p>
              </div>
              {paymentType === 'installment' &&
                amountToPay > 0 &&
                amountToPay < actualRemainingBalance && (
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-300">
                    <p className="text-sm text-gray-600">
                      New Remaining Balance:
                    </p>
                    <p className="text-lg font-semibold text-orange-600">
                      {formatCurrency(newRemainingBalance)}
                    </p>
                  </div>
                )}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handlePayNow}
                disabled={!isPaymentValid}
                className={`flex-1 py-3 rounded-md ${
                  isPaymentValid
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {!paystackReady ? 'Loading...' : 'Pay Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-4 justify-center my-20">
        <Link href="/contact">
          <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3">
            <FaRegCalendarAlt />
            Contact Us to Pay in Person
          </button>
        </Link>
      </div>

      <div className="mx-10">
        <h1 className="text-black text-2xl leading-relaxed my-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          About Property
        </h1>
        <hr />
      </div>

      <div className="text-gray-700 text-lg leading-relaxed my-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        {property?.body ? (
          <PortableText
            value={property?.body}
            components={RichTextComponents}
          />
        ) : null}
      </div>

      <div className="my-10">
        {property.youtubeLink && <YoutubeEmbed source={property.youtubeLink} />}
      </div>

      {/* Property Layout Section */}
      {property.layout && (
        <div className="mx-10 my-16">
          <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-black text-2xl font-semibold">Property Layout</h2>
              <a
                href={urlForFile(property.layout)}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition"
              >
                <FiDownload className="w-4 h-4" />
                Download Layout
              </a>
            </div>
            <hr className="mb-6" />
            <div className="bg-gray-100 rounded-lg p-4">
              {property.layout.asset._ref.includes('pdf') ? (
                <iframe
                  src={urlForFile(property.layout)}
                  className="w-full h-[600px] border-0 rounded"
                  title="Property Layout PDF"
                />
              ) : (
                <div className="flex justify-center">
                  <Image
                    src={urlForFile(property.layout)}
                    alt="Property Layout"
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center mt-16 gap-5">
        <Link href="/contact">
          <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3">
            <FaRegCalendarAlt />
            Contact Us For an Inspection Today
          </button>
        </Link>
      </div>

      {/* Fixed Bottom Payment Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-[8999]">
        <div className="wrapper max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-gray-600">Property Price</p>
                <p className="text-2xl font-bold text-customPrimary">
                  {formatCurrency(propertyAmount)}
                </p>
              </div>
              {property.soldOut && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  SOLD OUT
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <button
                className={`bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-sm px-8 py-3 rounded-md transition ${
                  property.soldOut ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleProceedToPayment}
                disabled={property.soldOut}
              >
                {property.soldOut ? 'Sold Out' : 'Proceed to Payment'}
              </button>
              <Link href="/contact">
                <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-6 py-3 rounded-md flex items-center gap-2">
                  <FaRegCalendarAlt />
                  <span className="hidden md:inline">Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to bottom so content doesn't hide under fixed bar */}
      <div className="h-24"></div>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
export default PropertyDetailed;
