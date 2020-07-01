import matplotlib.pyplot as plt
import numpy as np


time = [];
bar = np.full((1,50),2000)

for i in range(10, 100, 20):
    a = []
    for j in range(50):
        a.append(5000/((j+i)/i))
    time.append(a)

for a in time:
    plt.plot(a)

plt.plot(bar)
plt.show()