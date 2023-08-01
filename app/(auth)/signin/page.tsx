import { OAuthSignIn } from "@/components/auth/oauth-signin";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import SignInForm from "@/components/form/signin-form";

export default async function SigninPage() {
  const user = await currentUser();
  if (user) {
  }
  return (
    <div className="mx-auto max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">sign in</CardTitle>
          <CardDescription>choose prefered sign in method</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <SignInForm />
        </CardContent>
        <CardFooter>card footer</CardFooter>
      </Card>
    </div>
  );
}
