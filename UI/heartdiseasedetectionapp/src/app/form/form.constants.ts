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

