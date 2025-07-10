"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Building, User, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function ValleyAIAuth() {
  const [accountType, setAccountType] = useState<"individual" | "business" | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex flex-col">
      <div className="flex-1 flex">
        {/* Left Panel - Authentication Forms (65%) */}
        <div className="w-[65%] bg-white p-8 flex flex-col justify-center shadow-2xl">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <Image
                src="/images/valley-logo.png"
                alt="Valley AI"
                width={200}
                height={60}
                className="h-12 w-auto mx-auto"
              />
            </div>
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signup" className="text-sm font-medium">
                  Sign Up
                </TabsTrigger>
                <TabsTrigger value="login" className="text-sm font-medium">
                  Log In
                </TabsTrigger>
              </TabsList>

              {/* Sign Up Tab */}
              <TabsContent value="signup" className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Create Your Account</h3>
                  <p className="text-slate-600">Smarter care starts here </p>
                </div>

                {!accountType && (
                  <div className="space-y-4">
                    <Label className="text-base font-medium text-slate-900">Choose your account type:</Label>
                    <div className="grid gap-4">
                      <Card
                        className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-[#1F09FF]"
                        onClick={() => setAccountType("individual")}
                      >
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#1F09FF]/10 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-[#1F09FF]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">Individuals </h4>
                            <p className="text-sm text-slate-600">For personal caregiving needs</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-[#1F09FF]"
                        onClick={() => setAccountType("business")}
                      >
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#1F09FF]/10 rounded-full flex items-center justify-center">
                            <Building className="w-6 h-6 text-[#1F09FF]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">Businesses </h4>
                            <p className="text-sm text-slate-600">For professional care organizations</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {accountType === "individual" && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="family">Family Member</SelectItem>
                          <SelectItem value="caregiver">Professional Caregiver</SelectItem>
                          <SelectItem value="healthcare">Healthcare Provider</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm text-slate-600">
                        I agree to the Privacy Policy
                      </Label>
                    </div>
                    <Button className="w-full bg-[#1F09FF] hover:bg-[#1F09FF]/90 text-white font-medium py-3">
                      Create Account
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full mt-2 bg-transparent"
                      onClick={() => setAccountType(null)}
                    >
                      Back to Account Type
                    </Button>
                  </form>
                )}

                {accountType === "business" && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="facility-name">Facility Name</Label>
                      <Input id="facility-name" placeholder="Enter facility name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input id="contact-name" placeholder="Enter contact person name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-email">Email</Label>
                      <Input id="business-email" type="email" placeholder="Enter business email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="facility-type">Facility Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select facility type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assisted-living">Assisted Living</SelectItem>
                          <SelectItem value="nursing-home">Nursing Home</SelectItem>
                          <SelectItem value="memory-care">Memory Care</SelectItem>
                          <SelectItem value="home-health">Home Health Agency</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business-privacy" />
                      <Label htmlFor="business-privacy" className="text-sm text-slate-600">
                        I agree to the Privacy Policy
                      </Label>
                    </div>
                    <Button className="w-full bg-[#1F09FF] hover:bg-[#1F09FF]/90 text-white font-medium py-3">
                      Create Account
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full mt-2 bg-transparent"
                      onClick={() => setAccountType(null)}
                    >
                      Back to Account Type
                    </Button>
                  </form>
                )}
              </TabsContent>

              {/* Log In Tab */}
              <TabsContent value="login" className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h3>
                  <p className="text-slate-600">Sign in to your Valley AI account</p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" type="password" placeholder="Enter your password" />
                  </div>
                  <div className="text-right">
                    <a href="#" className="text-sm text-[#1F09FF] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button className="w-full bg-[#1F09FF] hover:bg-[#1F09FF]/90 text-white font-medium py-3">
                    Sign In
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-slate-300" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-slate-500">Or continue with</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Need Help Section */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 mb-2">
                Need Help? Contact us at{" "}
                <a href="mailto:support@valleyai.io" className="text-[#1F09FF] hover:underline">
                  support@valleyai.io
                </a>{" "}
                or{" "}
                <button
                  className="text-[#1F09FF] hover:underline bg-transparent border-none cursor-pointer"
                  data-cal-link="annanya-panagala/meeting-with-valley-ai"
                  data-cal-namespace="meeting-with-valley-ai"
                  data-cal-config='{"layout":"month_view"}'
                >
                  book a meeting
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Storytelling & Brand Identity (35%) */}
        <div className="w-[35%] p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Background Animation Elements */}
          <div className="absolute inset-0 text-blue-600 my-0 mr-0 px-0 border-0 mt-0 opacity-5 bg-violet-500">
            <div className="absolute top-20 left-20 w-32 h-32 bg-[#1F09FF] rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-10">
            {/* Main Headlines */}
            <div className="mb-12 mt-24">
              <h1 className="font-bold mb-6 leading-tight text-center text-black text-3xl">
                Giving you peace of mind
                <span className="animate-bounce text-[#1F09FF]">{"\nWherever you are"}</span>
              </h1>

              {/* Innovation Story Section */}
              <div className="backdrop-blur-sm rounded-xl p-4 border border-slate-200 mx-8 leading-7 tracking-normal mb-12 px-4 py-4 shadow-xl bg-white">
                <h3 className="font-bold text-[#1F09FF] mb-3 text-center tracking-normal text-2xl text-black">
                  Designed with care
                </h3>

                <p className="text-sm mb-4 leading-relaxed text-black">
                  Valley AI was founded by Harvard and MIT students who wanted to address the critical challenges in
                  senior care:
                </p>

                <div className="grid grid-cols-1 gap-2 mb-4">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-[#1F09FF] mt-0.5 flex-shrink-0 bg-transparent text-blue-600" />
                    <span className="text-sm bg-transparent text-black">Staff shortages in senior care    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#1F09FF] mt-0.5 flex-shrink-0 text-blue-600 bg-transparent" />
                    <span className="text-sm bg-transparent text-black">Increasing falls and injuries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-[#1F09FF] mt-0.5 flex-shrink-0 bg-transparent text-blue-600" />
                    <span className="text-sm bg-transparent text-black">Mental health challenges going undetected</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#1F09FF] mt-0.5 flex-shrink-0 bg-transparent text-blue-600" />
                    <span className="text-sm bg-transparent text-black">
                      Privacy concerns with monitoring technology
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-[#1F09FF] pl-3 rounded-r-lg p-2 bg-white">
                  <p className="text-slate-700 italic text-sm leading-relaxed mb-1">
                    "Our vision is to create a world where aging is safer, healthier, and more dignified through
                    innovative technology that also respects privacy."
                  </p>
                  <p className="text-slate-600 font-medium text-xs">— Valley AI Founding Team</p>
                </div>
              </div>
            </div>

            {/* Animated Care Monitoring Video */}
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  )
}
