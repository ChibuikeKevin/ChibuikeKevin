balance = 5000 # initial account balance
pin = input("Enter your pin: ")
if pin == "1234":
    print("Welcome to Kevin ATM")
    print("1. Withdraw")
    print("2. Transfer")
    print("3. Check Balance")
    choice = input("Enter your choice: ")
    if choice == "1":
        amount = int(input("Enter amount to withdraw: "))
        if amount > balance:
            print("Insufficient balance")
        else:
            balance -= amount
            print("Take Your Cash")
            print("Withdrawal successful")
            print("Remaining balance: ", balance)
    elif choice == "2":
        amount = int(input("Enter amount to deposit: "))
        balance -= amount
        print("Transfer successful")
        print("Updated balance: ", balance)
    elif choice == "3":
        print("Your balance is: ", balance)
    else:
        print("Invalid choice")
else:
    print("Invalid pin")
