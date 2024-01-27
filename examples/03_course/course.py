import requests
import csv
import re
import time
import random

def get_url(url_start, page_nums):
    # 获取网站连接
    urls = []
    for i in range(2, page_nums+1):
        urls.append(f'{url_start}p{i}')
    return urls

def get_info(url, address):
    # 获取网页内容
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',}
    a = requests.get(url, headers=headers).text
    # 分析数据并存储

    # 正则
    res_title = '(?<=<b class="strongbox">).*(?=</b>)'
    res_area1 = '(?<=style="font-weight: normal;">).*(?=</b>室)'
    res_area2 = '(?<=室<b class="strongbox" style="font-weight: normal;">).*(?=</b>厅)'
    res_area3 = '(?<=厅<span>\|</span><b class="strongbox" style="font-weight: normal;">).*(?=</b>)'
    res_feature1 = '(?<=<span class="cls-common">).*租(?=</span>)'
    res_price = '(?<=<strong class="price">).*(?=</strong>)'

    # 搜索信息
    zu_title = re.findall(res_title, a)
    zu_area1 = re.findall(res_area1, a)
    zu_area2 = re.findall(res_area2, a)
    zu_area3 = re.findall(res_area3, a)
    zu_feature1 = re.findall(res_feature1, a)
    zu_price = re.findall(res_price, a)

    # 写入文件
    with open(f'data/{address}.csv', 'a+', encoding='utf-8', newline='') as file_obj:
        # 创建对象
        writer = csv.writer(file_obj)
        # 遍历，将每一行的数据写入csv
        for p in range(len(zu_area1)-1):
            writer.writerow((zu_title[p], zu_area1[p], zu_area2[p], zu_area3[p],
                             zu_feature1[p], zu_price[p], address))

def main(url_list, address):
    # 爬取数据
    for i in url_list:
        get_info(i, address)
        a = random.randint(3,6)
        print(f'{address},No.{i}finish!')
        time.sleep(a)