from community.Username import Username_class

my_address = "0x57e3E07dd8c130949A6a02742Ee43003314b3b3c"
account_address = "0x42eaC0E78d14A4d26F43560F7ba3D5DF2e39aE93"  # my address for tests

abc = Username_class()
print(abc.get_username(my_address))


abc.set_username("GGGG")
print(abc.get_username( my_address, account_address))
