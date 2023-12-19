import pyotp
import time

# Generate a random base32 secret key
secret = pyotp.random_base32()

# Create a TOTP object with the secret
totp = pyotp.TOTP(secret)

# Generate the current OTP
otp = totp.now()

# Print the generated secret and current OTP
print(f"Secret: {secret}")
print(f"Current OTP: {otp}")

# Sleep for 10 seconds to demonstrate OTP change over time
time.sleep(10)

# Generate a new OTP after some time has passed
new_otp = totp.now()
print(f"New OTP after 10 seconds: {new_otp}")
