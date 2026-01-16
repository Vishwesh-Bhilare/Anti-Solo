"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

// Firebase imports
import { firebaseAuth } from "@/firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function SignupPage() {
  const supabase = supabaseBrowser();
  const [loading, setLoading] = useState(false);
  const [firebaseLoading, setFirebaseLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // For Firebase

  const signupSupabaseEmail = async () => {
    setLoading(true);
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/callback`,
      },
    });
    setLoading(false);
  };

  const signupSupabaseGithub = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/callback`,
      },
    });
    setLoading(false);
  };

  // 🚀 Firebase Email Signup
  const signupFirebaseEmail = async () => {
    setFirebaseLoading(true);
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      alert("Firebase account created!");
    } catch (err: any) {
      alert(err.message);
    }
    setFirebaseLoading(false);
  };

  // 🚀 Firebase Google Signup
  const signupFirebaseGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(firebaseAuth, provider);
      alert("Google signup successful!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-lg bg-surface p-8 shadow-soft">
        <h1 className="text-2xl font-bold">Create account</h1>

        {/* Email Input */}
        <input
          type="email"
          placeholder="you@example.com"
          className="mt-6 w-full rounded-md border px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password only for Firebase */}
        <input
          type="password"
          placeholder="Password (for Firebase signup)"
          className="mt-4 w-full rounded-md border px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Supabase Email OTP */}
        <Button
          className="mt-4 w-full"
          loading={loading}
          onClick={signupSupabaseEmail}
        >
          Sign up with Email (Supabase OTP)
        </Button>

        {/* Firebase Email Signup */}
        <Button
          className="mt-4 w-full bg-green-600 hover:bg-green-700"
          loading={firebaseLoading}
          onClick={signupFirebaseEmail}
        >
          Sign up with Email (Firebase)
        </Button>

        <div className="my-6 text-center text-sm text-textSecondary">or</div>

        {/* Supabase GitHub */}
        <Button
          variant="secondary"
          className="w-full"
          onClick={signupSupabaseGithub}
        >
          Sign up with GitHub 
        </Button>

        {/* Google Signup (Firebase) */}
        <Button
          variant="secondary"
          className="mt-4 w-full bg-red-500 text-white hover:bg-red-600"
          onClick={signupFirebaseGoogle}
        >
          Continue with Google 
        </Button>
      </div>
    </div>
  );
}
