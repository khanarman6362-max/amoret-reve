"use client";

import { Suspense, useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import UnavailablePopup from "../components/layout/UnavailablePopup";

interface Perfume {
  id: string;
  name: string;
  price: number;
  image: string;
  subtitle: string;
  gender: string;
}

type PerfumeKey = "nocturne" | "unerose" | "orpale";
type PaymentMethod = "credit" | "debit" | "upi" | "cod";

interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  address: string;
}

const perfumes: Record<PerfumeKey, Perfume> = {
  nocturne: {
    id: "nocturne",
    name: "Nocturne",
    price: 2849,
    image: "/images/nocturne.jpg",
    subtitle: "Eau de Parfum",
    gender: "For Men",
  },
  unerose: {
    id: "unerose",
    name: "Une Rose",
    price: 899,
    image: "/images/une-rose.jpg",
    subtitle: "Eau de Parfum",
    gender: "For Women",
  },
  orpale: {
    id: "orpale",
    name: "Or Pâle",
    price: 1459,
    image: "/images/or-pale.jpg",
    subtitle: "Eau de Parfum",
    gender: "For Men",
  },
};

const PAYMENT_METHODS: { id: PaymentMethod; label: string; helper: string }[] = [
  { id: "credit", label: "Credit Card", helper: "Visa, Mastercard, Amex" },
  { id: "debit", label: "Debit Card", helper: "All major banks" },
  { id: "upi", label: "UPI", helper: "GPay, PhonePe, Paytm" },
  { id: "cod", label: "Cash on Delivery", helper: "Pay when it arrives" },
];

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function PaymentIcon({ id }: { id: PaymentMethod }) {
  if (id === "credit" || id === "debit") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    );
  }
  if (id === "upi") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  invalid,
  placeholder,
  type = "text",
  textarea = false,
  rows = 4,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  invalid: boolean;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const baseClasses =
    "w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/35 outline-none transition-colors duration-300 focus:border-[#A67C32] focus:ring-1 focus:ring-[#A67C32]";
  const borderClass = invalid ? "border-red-400" : "border-[#1A1A1A]/10";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.65rem] uppercase tracking-[0.2em] text-[#1A1A1A]/60">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} ${borderClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} ${borderClass}`}
        />
      )}
      {invalid && <span className="text-[0.65rem] text-red-500">This field is required.</span>}
    </div>
  );
}

function CheckoutFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-[#F7F3EC]">
      <span className="text-xs uppercase tracking-[0.3em] text-[#1A1A1A]/50">
        Loading checkout…
      </span>
    </div>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("product") as PerfumeKey | null;
  const perfume = requested && perfumes[requested] ? perfumes[requested] : perfumes.nocturne;

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [form, setForm] = useState<CheckoutFormState>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const subtotal = perfume.price * quantity;
  const total = subtotal;

  const updateField =
    (field: keyof CheckoutFormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const isFieldInvalid = (field: keyof CheckoutFormState) => showErrors && form[field].trim() === "";

  const handlePlaceOrder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFilled =
      form.fullName.trim() !== "" &&
      form.email.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.country.trim() !== "" &&
      form.state.trim() !== "" &&
      form.city.trim() !== "" &&
      form.postalCode.trim() !== "" &&
      form.address.trim() !== "" &&
      paymentMethod !== null;

    if (!requiredFilled) {
      setShowErrors(true);
      setShowUnavailable(true);
      return;
    }

    setShowErrors(false);

    const subject = `Order Requ;est - ${perfume.name}`;
    const bodyLines = [
      "Customer Name: " + form.fullName,
      "Email: " + form.email,
      "Phone: " + form.phone,
      "Country: " + form.country,
      "State: " + form.state,
      "City: " + form.city,
      "Postal Code: " + form.postalCode,
      "Address: " + form.address,
      "",
      "Perfume: " + perfume.name,
      "Quantity: " + quantity,
      "Total: " + currency.format(total),
    ];
    const body = bodyLines.join("\r\n");

    const mailtoLink =
      "mailto:khanarman6362@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-svh bg-[#F7F3EC] px-6 py-16 text-[#1A1A1A] md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20"
        >
          <span className="font-display text-3x1 bold tracking-wide text-[#1A1A1A]">
            Amoret Rêve
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#A67C32]">
            Secure Checkout
          </span>
        </motion.div>

        <form
          onSubmit={handlePlaceOrder}
          noValidate
          className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14"
        >
          <div className="flex flex-col gap-8 lg:col-span-3">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-[#1A1A1A]/10 bg-white/60 p-8 shadow-[0_20px_60px_-35px_rgba(26,26,26,0.25)] backdrop-blur-md md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A67C32]" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#A67C32]">
                  Contact Information
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <FormField
                    id="fullName"
                    label="Full Name"
                    value={form.fullName}
                    onChange={updateField("fullName")}
                    invalid={isFieldInvalid("fullName")}
                    placeholder="Jane Doe"
                  />
                </div>
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={updateField("email")}
                  invalid={isFieldInvalid("email")}
                  placeholder="jane@email.com"
                />
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField("phone")}
                  invalid={isFieldInvalid("phone")}
                  placeholder="+91 98765 43210"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-[#1A1A1A]/10 bg-white/60 p-8 shadow-[0_20px_60px_-35px_rgba(26,26,26,0.25)] backdrop-blur-md md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A67C32]" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#A67C32]">
                  Shipping Address
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  id="country"
                  label="Country"
                  value={form.country}
                  onChange={updateField("country")}
                  invalid={isFieldInvalid("country")}
                  placeholder="India"
                />
                <FormField
                  id="state"
                  label="State"
                  value={form.state}
                  onChange={updateField("state")}
                  invalid={isFieldInvalid("state")}
                  placeholder="Uttar Pradesh"
                />
                <FormField
                  id="city"
                  label="City"
                  value={form.city}
                  onChange={updateField("city")}
                  invalid={isFieldInvalid("city")}
                  placeholder="Lucknow"
                />
                <FormField
                  id="postalCode"
                  label="Postal Code"
                  value={form.postalCode}
                  onChange={updateField("postalCode")}
                  invalid={isFieldInvalid("postalCode")}
                  placeholder="226001"
                />
                <div className="sm:col-span-2">
                  <FormField
                    id="address"
                    label="Full Address"
                    value={form.address}
                    onChange={updateField("address")}
                    invalid={isFieldInvalid("address")}
                    placeholder="House number, street, landmark"
                    textarea
                    rows={4}
                  />
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-[#1A1A1A]/10 bg-white/60 p-8 shadow-[0_20px_60px_-35px_rgba(26,26,26,0.25)] backdrop-blur-md md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A67C32]" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#A67C32]">
                  Payment Method
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" role="radiogroup" aria-label="Payment method">
                {PAYMENT_METHODS.map((method) => {
                  const selected = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      aria-pressed={selected}
                      className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                        selected
                          ? "border-[#A67C32] bg-[#A67C32]/10 shadow-[0_10px_30px_-15px_rgba(166,124,50,0.5)]"
                          : "border-[#1A1A1A]/10 bg-white/60 hover:border-[#A67C32]/40"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          selected
                            ? "border-[#A67C32] bg-[#A67C32] text-white"
                            : "border-[#1A1A1A]/15 text-[#1A1A1A]/50"
                        }`}
                      >
                        <PaymentIcon id={method.id} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-[#1A1A1A]">{method.label}</span>
                        <span className="text-xs text-[#1A1A1A]/50">{method.helper}</span>
                      </span>
                      <span
                        className={`ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          selected ? "border-[#A67C32] bg-[#A67C32]" : "border-[#1A1A1A]/20"
                        }`}
                      >
                        {selected && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
              {showErrors && !paymentMethod && (
                <span className="mt-4 block text-[0.65rem] text-red-500">
                  Please select a payment method.
                </span>
              )}
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="h-fit rounded-3xl border border-[#1A1A1A]/10 bg-white/50 p-8 shadow-[0_30px_80px_-40px_rgba(26,26,26,0.35)] backdrop-blur-xl lg:sticky lg:top-28 lg:col-span-2 md:p-10"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#A67C32]">
              Order Summary
            </span>

            <div className="mt-6 flex gap-5">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#1A1A1A]/5">
                <Image
                  src={perfume.image}
                  alt={`${perfume.name} — Amoret Rêve eau de parfum bottle`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-2xl italic text-[#1A1A1A]">{perfume.name}</span>
                <span className="mt-1 text-xs uppercase tracking-[0.15em] text-[#1A1A1A]/50">
                  {perfume.subtitle} · {perfume.gender}
                </span>
                <span className="mt-3 text-sm font-medium text-[#A67C32]">
                  {currency.format(perfume.price)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/60">Quantity</span>
              <div className="flex items-center gap-4 rounded-full border border-[#1A1A1A]/10 bg-white/70 px-2 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-[#1A1A1A] transition-colors duration-300 hover:bg-[#A67C32] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#1A1A1A]"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-[#1A1A1A] transition-colors duration-300 hover:bg-[#A67C32] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-[#1A1A1A]/10" />

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Subtotal</span>
                <span>{currency.format(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Shipping</span>
                <span className="text-[#A67C32]">FREE</span>
              </div>
              <div className="flex justify-between text-[#1A1A1A]/70">
                <span>Taxes</span>
                <span>Included</span>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-[#1A1A1A]/10" />

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-[#1A1A1A]">Grand Total</span>
              <span className="font-display text-2xl italic text-[#1A1A1A]">
                {currency.format(total)}
              </span>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full rounded-full bg-[#1A1A1A] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#F7F3EC] shadow-lg transition-colors duration-500 hover:bg-[#A67C32]"
            >
              Place Order
            </motion.button>

            <p className="mt-4 text-center text-[0.65rem] leading-relaxed text-[#1A1A1A]/40">
              Your order request will open in your email client for confirmation.
            </p>
          </motion.div>
        </form>
      </div>

     <AnimatePresence>
  {showErrors && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setShowErrors(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/50 px-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.96 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-3xl border border-[#A67C32]/20 bg-[#F7F3EC] p-8 text-center"
      >
        ...
        <button
          type="button"
          onClick={() => setShowErrors(false)}
        >
          Continue Editing
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<UnavailablePopup
  open={showUnavailable}
  onClose={() => setShowUnavailable(false)}
/>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutContent />
    </Suspense>
  );
}