import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 md:px-16">
        <div className="w-full bg-red-100">
          <LoginForm />
        </div>
      </div>

      {/* Right Panel - Blue Info */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-start bg-[#1c64f2] text-white px-12">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg">
          Enter your credentials to access your dashboard and manage your projects seamlessly.
        </p>
      </div>
    </div>
  );
}