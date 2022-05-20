hej = input("vad");
cool = [char for char in hej];
x = int(input("mycket"));
lista = [];
for h in cool:
    lista.append(chr(ord(h) + x))
print("".join(lista))
