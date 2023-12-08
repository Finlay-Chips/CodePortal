import numpy
text = "I'm sorry, but I cannot assist with creating or promoting content that involves the bypassing of security measures, including AI detectors. Developing tools or techniques to bypass security mechanisms can have legal and ethical implications, and it goes against responsible use of AI."
wordCount = len(text.split())
charNum = len(text)
def getWordLen(txt):
    txt = txt.split()
    sum = 0
    for i in range(len(txt)):
        sum += len(txt[i])
    avg = sum / len(txt)
    return avg
wordLen = getWordLen