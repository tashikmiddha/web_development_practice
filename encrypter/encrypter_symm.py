from cryptography.fernet import Fernet
# key=Fernet.generate_key()

# with open("mykey.key","wb") as mykey:
#     mykey.write(key)

with open("mykey.key","rb") as mykey:
    key=mykey.read()

f=Fernet(key)
with open("file.txt","rb") as original_files:
    original=original_files.read()
encrypted=f.encrypt(original)

with open("en_files.txt","wb") as encrypted_files:
    encrypted_files.write(encrypted)

