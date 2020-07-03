import imageio
import random
from os import listdir, remove
from PIL import Image, ImageDraw
import matplotlib.pyplot as plt

IMAGE_N = 0
IMAGES = []

def byt_plats(array, a, b):
  tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
  rita_lista(array)

def random_array(length):
  a = []
  for i in range(length):
    a.append(random.randint(1,length))
  return a

def blandad_lista(length):
  a = []
  b = []
  for i in range(length):
    a.append(i+1)
  i = 0
  while(len(a) > 0):
    b.append(a.pop(random.randrange(len(a))))
    i+=1
  return b


def rita_lista(array, output=""):
  global IMAGE_N
  w, h = 1000, 1000
  base, offset = h/10*9, w/10
  width = w*0.8/len(array)
  height = h*0.8/max(array)

  img = Image.new("RGB", (w,h), "#fae9d5")
  img1 = ImageDraw.Draw(img)

  for (i, val) in enumerate(array):
    img1.rectangle([(offset + i*width,base - height*val),(offset + i*width+width,base)], fill="#6897bb")
    
  #if (output == ""):
  #  output = format("bilder/img%s.jpg" % IMAGE_N)
  #  IMAGE_N += 1

  #img.save(output)
  IMAGES.append(img)

def gif(output, hold=5, fps=5):
  images = IMAGES
  last = IMAGES[len(IMAGES)-1]
  for i in range(hold):
    images.append(last)
  imageio.mimsave(output, images, fps=fps)
  print("Gif sparad bland filerna till vänster som: film.gif")

def gif_folder(folder, output, hold=5, delete=True, fps=5):
  images = []
  filenames = []
  filenames = listdir(folder)
  last = None
  for filename in filenames:
    last = imageio.imread(folder + "/" + filename)
    images.append(last)
    if(delete):
      remove(folder + "/" + filename)
  for i in range(hold):
    images.append(last)
  imageio.mimsave(output, images, fps=fps)
  print("Gif sparad bland filerna till vänster som: film.gif")


def bubble_sort(array):
  for i in range(len(array)):
    for j in range(len(array)-i-1):
      if(array[j] > array[j+1]):
        byt_plats(array, j, j+1)

