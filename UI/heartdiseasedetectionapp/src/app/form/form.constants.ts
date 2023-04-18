export const apiformat={
   'age':'',
   'trestbps':'',
   'chol':'',
   'thalach':'',
   'oldpeak':'',
   'sex_0':'',
   'cp_0':'',
   'cp_1':'',
   'cp_2':'',
   'fbs_0':'',
   'restecg_0':'',
   'restecg_1':'',
   'exang_0':'',
   'Slope_0':'',
   'Slope_1':'',
   'ca_0':'',
   'ca_1':'',
   'ca_2':'',
   'ca_3':'',
   'thal_0':'',
   'thal_1':'',
   'thal_2':'',

}

export const values:any={
    sex:{'Male':1, 'Female':0},
    cp:{'Typical Angina':[1,0,0,0],'Atypical Angina':[0,1,0,0],'Non-anginal pain':[0,0,1,0],'Asymptomatic':[0,0,0,1]},
    fbs:{'Yes':1,'No':0},
    restecg:{'Normal':[1,0,0],'Having ST-T Wave Abnormality':[0,1,0],'Showing probable or Definite left ventricular hypertrophy':[0,0,1]},
    exang:{'Yes':1,'No':0},
    Slope:{'Upsloping':[1,0,0],'Flat':[0,1,0],'Downsloping':[0,0,1]},
    ca:{'Zero':[1,0,0,0],'One':[0,1,0,0],'Two':[0,0,1,0],'Three':[0,0,0,1]},
    thal:{'Normal':[1,0,0],'Fixed defect':[0,1,0],'Reversible defect':[0,0,1]}
}

export const popupMessage={
    age:"",
    trestbps:"The pressure of blood in your arteries when your heart is at rest. Normal range is typically between 90/60mmHg to 120/80mmHg.",
    chol:"A waxy substance found in your blood that is necessary for building healthy cells, but can contribute to heart disease if levels are too high. A total cholesterol level below 200mg/dL is considered desirable. Example value: 180mg/dL.",
    thalach:"The maximum number of times your heart should beat per minute when exercising. Subtract your age from 220 to get your estimated max heart rate. Example value: if you are 30 years old, your estimated max heart rate would be 190 beats per minute",
    oldpeak:"The amount of ST depression induced by exercise relative to rest. A higher number indicates a higher likelihood of heart disease. Example value: 2.5.",
    sex:"",
    cp:"A discomfort or pain in the chest that can be a symptom of a heart attack or other heart-related conditions",
    fbs:"The amount of glucose (sugar) in your blood after fasting for at least 8 hours. A fasting blood sugar level of less than 100mg/dL is considered normal.",
    restecg:"A test that measures the electrical activity of your heart while you are at rest. The results can help your doctor determine if there are any abnormalities in your heart rhythm.",
    exang:"Chest pain or discomfort that occurs during physical activity or exertion due to reduced blood flow to the heart muscle. This can be a warning sign of underlying heart disease",
    Slope:"Refers to the slope of the peak exercise ST segment. The ST segment represents the time between ventricular depolarization (contraction) and repolarization (relaxation), and changes in its shape or position can indicate heart problems",
    ca:"This refers to the number of large blood vessels visible during a special imaging test called flourosopy, which is used to detect blockages or narrowings in the arteries of the heart. A higher number indicates a greater degree of blockage or narrowing.",
    thal:"An inherited blood disorder that can affect the production of hemoglobin, which can lead to anemia. Some types of thalassemia are associated with an increased risk of heart disease. \n thal: 0 = normal; 1 = fixed defect; 2 = reversable defect"
}