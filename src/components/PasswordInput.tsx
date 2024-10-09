import React, { useState } from "react";
import { Input, InputProps } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          className={cn("pe-10", className)}
          type={showPassword ? "text" : "password"}
          ref={ref}
          {...props}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
          type="button"
          onClick={() => setShowPassword((pre) => !pre)}
          title={showPassword ? "Hide Password" : "Show Password"}
        >
          {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
