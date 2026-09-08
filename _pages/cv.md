---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download the PDF version](/files/CV_Tahmidul_Bin_Ferdous.pdf)

Education
======
* BSc in Computer Science and Engineering, International Islamic University Chittagong, 2022–2026
  * CGPA 3.311 / 4.00 · 163 / 163 credits
  * Thesis: *Detecting Data Leakage in Lung Cancer CT Classification* · Grade A
  * Supervisor: Md. Khaliluzzaman, Associate Professor, Department of CSE

Research experience
======
* **Undergraduate thesis — auditing data leakage in medical imaging benchmarks**, 2025–2026
  * Designed a controlled paired audit across four architecture families (666K–85.8M parameters),
    varying only the data partitioning strategy
  * Showed that a deterministic ordering split costs ≈7.5 accuracy points and halves
    minority-class F1 relative to a random image-level split, replicated over three seeds and two
    architecture families
  * Reproduced the audited papers' protocols, matching four of five published EfficientNet
    variants within ±0.5 pp
  * Derived the expected contamination rate analytically from the dataset structure using the
    hypergeometric distribution

* **Generative modelling for CT synthesis**, 2026
  * Implemented class-conditional Rectified Flow (flow matching) from the paper — linear
    interpolant, velocity objective, logit-normal timestep sampling, Euler and midpoint solvers,
    EMA weights
  * Built the training stack: DistributedDataParallel on 2× T4, mixed precision, checkpointing,
    experiment tracking
  * Ported the model to JAX/Flax for 8× TPU v5e, reaching 576 images/s and 2.50 s/epoch against
    15.5 s/epoch on 2× T4
  * Built a class-conditional DDPM baseline for comparison

* **DSMaT — depthwise Mamba-attention transformer**, 2026
  * Designed an original hybrid architecture combining depthwise-separable convolution stems,
    Mamba state-space blocks, and self-attention, at two scales; exploratory

Work experience
======
* **Machine Learning Engineering Intern**, FlyRank AI — Remote, USA, July 2026 – December 2026
* **AI Data Labeling Specialist**, Outlier AI — Remote, November 2024 – February 2025
  * Annotated large-scale datasets for model training with emphasis on quality and
    inter-annotator consistency
  * Contributed to refining annotation guidelines across multiple projects
* **Computer Vision Engineer (contract)**, Freelance — Remote, USA client, November 2024
  * Delivered a real-time computer-vision packet-counting system for inventory automation within
    a 15-day window

Skills
======
* **Languages:** Python, C++, SQL, Bash, LaTeX
* **Frameworks:** PyTorch, JAX/Flax, TensorFlow/Keras, timm, torchvision, Ultralytics YOLO,
  OpenCV, MediaPipe, scikit-learn
* **Training systems:** DistributedDataParallel, mixed precision, TPU training in JAX,
  checkpointing and EMA, throughput benchmarking, Weights & Biases
* **Implemented from the paper:** transformer/GPT, DCGAN, WGAN-GP, DDPM, rectified flow,
  Mamba–attention hybrid, CNN–multi-head-attention hybrid
* **Methodology:** controlled experimental design, multi-seed replication, reproduction of
  published results, data leakage analysis, threats-to-validity reporting, Grad-CAM

Selected coursework
======
* Neural Network and Fuzzy System (A) · Pattern Recognition and Image Processing (A−, lab A+)
* Artificial Intelligence (A−) · Computer Security (A−, lab A+) · Computer Networks (A−)
* Mathematical Analysis for Computer Science (A−) · Technical Writing and Presentation (A+)

Certifications
======
* Neural Networks and Deep Learning · Improving Deep Neural Networks · Convolutional Neural
  Networks · Sequence Models — DeepLearning.AI (Coursera)
* Data Scientist: Machine Learning Career Path — Codecademy
