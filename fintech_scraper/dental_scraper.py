# AIA 생명 치아보험 견적 페이지 : 보장 내역과 보험료 출력
# 라이나 치아보험

from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')

# AIA 치아보험
def getAIAdata(birth):
    driver.get("https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html#")
    # ----- 로직 작성하기 -----

    mybrith = driver.find_element_by_xpath('//*[@id="aia644363719"]')
    mybrith.send_keys(birth)

    driver.find_element_by_xpath('//*[@for="gender-select-1-sexDvsn-1112632466"]').click()
    driver.find_element_by_xpath('//*[@id="btn806817556"]').click()

    driver.implicitly_wait(2)

    result = driver.find_element_by_xpath('//*[@id="premium-by-timespan-value"]')
    print(result.text)

    tableBody = driver.find_element_by_xpath(
        '//*[@id="collapse-large-724022276"]/div[1]/div/table').find_element_by_tag_name('tbody')
    driver.find_element_by_xpath(
        '//*[@id="the_fine_print"]/div[2]/div[1]/div[2]/div/a[2]').click()
    rows = tableBody.find_elements_by_tag_name("tr")
    contentsList = []

    for index, value in enumerate(rows):
        if index != 0:
            print(value.find_elements_by_tag_name('td')[0].text)
            contentsList.append(value.find_elements_by_tag_name('td')[0].text)
    # ------------------------

# 강사님이 작성 (라이나)
def getLinaData(birth, gender):
    driver = webdriver.Chrome('./chromedriver')
    scrapingResult = {
        'company': "라이나",
        'price': 0,
        'contents': []
    }
    driver.get('https://direct.lina.co.kr/product/ess/dtc01/easy')
    textBox = driver.find_element_by_xpath('//*[@id="birthday"]')
    textBox.send_keys(birth)
    if gender == 1:
        femaleBtn = driver.find_element_by_xpath('//*[@id="main_btn_female"]')
        femaleBtn.click()
    else:
        maleBtn = driver.find_element_by_xpath('//*[@id="main_btn_male"]')
        maleBtn.click()
    resultBtn = driver.find_element_by_xpath(
        '//*[@id="btn_direct_dental_cal"]')
    resultBtn.click()
    driver.implicitly_wait(6)

    htmlResult = driver.find_element_by_id('mo_amount_span').text
    resultValue = rePlaceData(htmlResult)
    scrapingResult['price'] = resultValue
    driver.implicitly_wait(2)
    detailBtn = driver.find_element_by_xpath('//*[@id="openLayerplanPonA2"]')
    detailBtn.click()
    driver.implicitly_wait(2)

    tableBody = driver.find_element_by_xpath(
        '//*[@id="planPonA2"]/div/div[2]/div/div/table[1]').find_element_by_tag_name('tbody')
    rows = tableBody.find_elements_by_tag_name("tr")
    contentsList = []
    for index, value in enumerate(rows):
        if index != 0:
            print(value.find_elements_by_tag_name('th')[0].text)
            contentsList.append(value.find_elements_by_tag_name('th')[
                                0].text)
    scrapingResult['contents'] = contentsList
    return scrapingResult

getAIAdata('19990612')
print(getLinaData(990612, 1))