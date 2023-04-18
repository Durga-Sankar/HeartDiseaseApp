<h1>Heart disease prediction and prevention using MLOPS</h1>

<p>This is a final year project developed by a team of 5 members:</p>
<ul>
	<li>Suhag Sundar Swain</li>
	<li>Yagyandatta Murmu</li>
	<li>Durga Sankar Sahoo</li>
	<li>Sweta Sardar</li>
	<li>Sritam Sankar Padhy</li>
</ul>

<h2>Overview</h2>
<p>This project aims to predict heart disease using machine learning and prevent heart disease through MLOPS techniques.</p>

<h2>Prerequisites</h2>
<ul>
	<li>Python 3.x</li>
	<li>Flask</li>
	<li>NumPy</li>
	<li>Pandas</li>
	<li>Scikit-Learn</li>
	<li>Git</li>
	<li>Docker</li>
	<li>Kubernetes</li>
</ul>

<h2>Installation</h2>
<ol>
	<li>Clone the repository to your local machine using the command below:</li>
</ol>
<pre><code>git clone https://github.com/yagyandatta/HeartDiseaseApp.git</code></pre>
<ol start="2">
	<li>Install the required Python packages:</li>
</ol>
<pre><code>pip install -r requirements.txt</code></pre>
<ol start="3">
	<li>Build the Docker image:</li>
</ol>
<pre><code>docker build -t heart-disease-prediction .</code></pre>
<ol start="4">
	<li>Run the Docker container:</li>
</ol>
<pre><code>docker run -p 5000:5000 heart-disease-prediction</code></pre>

<h2>Usage</h2>
<ol>
	<li>Open your web browser and navigate to <a href="http://localhost:5000/">http://localhost:5000/</a></li>
	<li>Fill out the input form with the required values and click the "Predict" button to see the prediction.</li>
</ol>

<h2>How it Works</h2>
<p>The machine learning model takes into account several input parameters, including age, sex, chest pain type, resting blood pressure, cholesterol levels, fasting blood sugar, resting electrocardiographic results, maximum heart rate achieved, exercise-induced angina, ST depression induced by exercise relative to rest, slope of the peak exercise ST segment, number of major vessels colored by fluoroscopy, and thalassemia.</p>
<p>The MLOPS techniques are used to prevent heart disease by continuously monitoring the health of the patient, predicting the risk of heart disease, and providing preventive measures to the patient.</p>

<h2>Dataset</h2>
<p>The machine learning model used in this application was trained on the Cleveland Heart Disease dataset, which can be found at the <a href="https://archive.ics.uci.edu/ml/datasets/heart+Disease">UCI Machine Learning Repository</a>.</p>
<p>The dataset consists of 303 instances, each with 14 input attributes and a binary output indicating the presence or absence of heart disease.</p>

<h2>Credits</h>
<p>We would like to thank our project guide <b> Dr. Subhadarshini Mohanty </b>  for their constant support and guidance throughout the project.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

