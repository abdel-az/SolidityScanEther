request = "C:\\Users\\PC\Desktop\\Dataset\\smartbugs-curated-main\\dataset\\access_control\\arbitrary_location_write_simple.sol"
with open(request,'r') as file:
    Data = file.readlines()
    for line in Data:
        print(line) 