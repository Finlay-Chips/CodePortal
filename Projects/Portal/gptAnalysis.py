import os
import openai
import numpy as np
text = "Divorce is more than just a legal process; it is a voyage into uncharted emotional waters. The stormy turbulence of my parents' separation altered the course of my life, leaving me emotionally battered and forever changed. As I navigated through the tumultuous seas of my parents' divorce, I learned valuable lessons about resilience, compassion, and the importance of finding my own anchor in the storm."
words = []
lowInd = 0
highInd = 0
for i in text:
    if(i == " " or highInd == len(text) - 1):
        words.append(text[lowInd:highInd])
        lowInd = highInd + 1
    highInd += 1
print(words)
wordsnp = np.array(words)
uniqueWords = []
for i in words:
    if(uniqueWords.count(i) == 0):
        uniqueWords.append(i)
uniqueWords = np.array(uniqueWords)
print(uniqueWords)
freq = np.empty((len(uniqueWords),2))
tempFq = []
ind = 0
for i in uniqueWords:
    freq[ind][0] = ind
    freq[ind][1] = words.count(i)
    ind += 1
print(freq)
avgLen = 0
for i in words:
    avgLen += len(i)
avgLen /= len(words)
print(avgLen)
wordLen = []
for i in words:
    wordLen.append(len(i))
wordLen = np.array(wordLen)
SD = np.std(wordLen)
print(SD)
