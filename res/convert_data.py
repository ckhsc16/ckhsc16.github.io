import csv
import json
from os import read

csvPath = '/Users/chingwei/Project/ckhsc16_unnatural/res/list.csv'
jsonPath = '/Users/chingwei/Project/ckhsc16_unnatural/scripts/list.json'

with open(csvPath, 'r') as f:
    reader = csv.reader(f)
    next(reader)
    data = {}
    for row in reader:
        data[row[1]] = [row[0], row[2], row[3]]

with open(jsonPath, 'w') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)
