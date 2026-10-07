---
title: CV
---

[Download the PDF version](/files/academic_cv_v1.5.pdf)

## Education

* **BSc in Computer Science & Engineering** — International Islamic University Chittagong (IIUC), Chittagong, Bangladesh
    * 2022 – 2026
    * Undergraduate Thesis: "Detecting Data Leakage in Lung Cancer CT Classification, across CNN, EfficientNet, and Vision Transformer models."
    * GPA: 3.31 / 4.00

## 

## Technical Skills

* **Programming Languages:** Python (Primary, 250+ logged experiments), C++, SQL, Bash/Shell, LaTeX.
* **Deep Learning Frameworks:** PyTorch (Advanced), JAX/Flax, torchvision, timm, TensorFlow/Keras, Hugging Face.
* **Computer Vision & ML Libraries:** OpenCV, MediaPipe, Ultralytics YOLOv11, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib.
* **Systems & Infrastructure:** Distributed Data Parallel (`torchrun`, multi-GPU DDP), Google Cloud TPU v5e (8-device JAX), Mixed Precision (AMP), Weights & Biases (250 tracked runs), Git, Docker, Linux/Ubuntu.
* **Models Built from Scratch:** Autoregressive Decoder Transformer (GPT-1), Rectified Flow / Flow Matching with ODE solvers, Conditional DDPM, WGAN-GP (gradient penalty & critic loop), DCGAN, Mamba-Attention hybrid (DSMaT).

## Research & Professional Experience

* **EliteLab** — Remote, _Student Researcher_ (2026 – Present)
* **Outlier AI** — Remote, _AI Data Quality & Alignment Specialist_ (November 2024 – February 2025)
    * Audited and curated large-scale human preference and reasoning datasets utilized for Reinforcement Learning from Human Feedback (RLHF) and alignment.
    * Refined multi-turn annotation guidelines, directly mitigating prompt ambiguity and improving inter-annotator reliability across reasoning benchmarks.

## Personal Projects

* **Data Leakage in Lung Cancer CT Classification (Undergraduate Thesis)** (Sep 2025 – Jun 2026) · [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study)
    * _PyTorch, timm, CCAL, EfficientNet B0–B4, ViT-B/16, Weights & Biases (188 runs)_
    * Audited slice-level data splits on the IQ-OTH/NCCD lung CT dataset across four architecture families (CCAL dual-CNN attention, EfficientNet B0–B4, ViT-B/16, and a PLOS ONE four-block CNN), training every model twice under a shuffled and a file-order split with everything else held fixed.
    * Showed that shuffled slice splits inflate test accuracy by **\~7.5 points** at a matched split ratio over three seeds (CCAL 95.8% → 88.3%; EfficientNet 99.3% → 91.7%).
* **Conditional Rectified Flow for CT Synthesis on Google Cloud TPU v5e** (Feb 2026 – Mar 2026) · [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/main/extra_experiments/rectified-flow)
    * _PyTorch, JAX/Flax, Google Cloud TPU v5e, Weights & Biases (18 runs, 32.1 GPU-hours)_
    * Implemented class-conditional Rectified Flow (flow matching) from original mathematical literature: linear interpolant trajectory, velocity-prediction objective, logit-normal timestep sampling, and Euler/midpoint ODE numerical solvers.
    * Built multi-GPU DistributedDataParallel (DDP) PyTorch training infrastructure, then **ported the complete architecture to JAX/Flax for 8-device Google TPU v5e**, achieving **576 images/sec** (2.50 s/epoch vs. 15.5 s/epoch on 2× Tesla T4)—a **\~6× throughput speedup**.
* **BanglaPoemGPT — 10M-Parameter Autoregressive Transformer from Scratch** (March 2025) · [Code](https://github.com/tahmidulferdous/bangla-gpt-from-scratch)
    * _Python, PyTorch, Kaggle P100 (4 runs, 2.0 GPU-hours)_
    * Engineered a GPT-1 architecture from first mathematical principles without high-level library wrappers: multi-head causal self-attention, learned positional embeddings, custom tokenizer, and autoregressive generation loop.
    * Trained on a 3M-token Bengali poetic corpus, achieving validation cross-entropy loss of **1.693** with coherent generative sampling.
* **Conditional DDPM for Minority-Class CT Balancing** (February 2026) · [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/main/extra_experiments/diffusion)
    * _PyTorch, DistributedDataParallel, 2× Tesla T4 (5 runs, 4.2 GPU-hours)_
    * Constructed a class-conditional Denoising Diffusion Probabilistic Model (DDPM) featuring a conditional U-Net backbone, cosine noise schedule, and multi-GPU DDP orchestration, reaching a training loss of **0.0238** over 3,000 epochs.
* **Edge Vision: YOLOv11 Campus Security & Facial Biometric Systems** (Oct 2024 – Nov 2024) · [Code](https://github.com/tahmidulferdous/yolo11-idcard-detection) · [Kaggle](https://www.kaggle.com/code/tahmidulkashfi/iiuc-idcard-v2-0-38map95) · Demos: [ID Card Detection](https://www.linkedin.com/feed/update/urn:li:activity:7252285574110171137/), [Facial Attendance](https://www.linkedin.com/feed/update/urn:li:activity:7257462743069270016/)
    * _YOLOv11, OpenCV, FaceNet, PyTorch_
    * Curated, annotated, and trained custom YOLOv11-s/m models for campus ID compliance monitoring, reaching **mAP50 = 0.82**.
    * Implemented edge facial recognition utilizing SSD face detectors and FaceNet 128-d embeddings with cosine similarity matching, calibrating decision thresholds against false-accept/false-reject trade-offs.
* **Generative Adversarial Networks: Bengali Digits & Faces** (Nov 2024) · [Code (Digits)](https://github.com/tahmidulferdous/bengali-digit-gan) · [Code (Faces)](https://github.com/tahmidulferdous/wgan-face-generation)
    * _PyTorch, DCGAN, WGAN-GP, Weights & Biases (42 runs)_
    * Implemented DCGAN and WGAN-GP (gradient penalty, critic loop) from scratch to generate handwritten Bengali digits and face images, comparing training stability across adversarial objectives.
* **Sketch AI: Real-Time Air Canvas** (Nov 2024) · [Demo](https://www.linkedin.com/feed/update/urn:li:activity:7267928416534839296/)
    * _MediaPipe, OpenCV, Python_
    * Built a real-time air-canvas that tracks fingertip landmarks from a webcam to draw on screen with hand gestures.
* **Face Mouse: Hands-Free Cursor Control** (Aug 2024) · [Demo](https://www.linkedin.com/feed/update/urn:li:activity:7271416959215239168/)
    * _MediaPipe, OpenCV, PyAutoGUI_
    * Built a hands-free mouse for users with motor disabilities: nose landmarks drive the cursor and eye blinks trigger clicks.

## Certifications

* **DeepLearning.AI Specializations (Coursera):** Neural Networks & Deep Learning, Improving Deep Neural Networks (Tuning, Regularization, Optimization), Convolutional Neural Networks, Sequence Models.

## Academic References

* **Dr. Md. Khaliluzzaman**
    * Associate Professor
    * Department of Computer Science and Engineering, International Islamic University Chittagong (IIUC), Chittagong, Bangladesh
    * Email: [khalil@iiuc.ac.bd](mailto:khalil@iiuc.ac.bd)
* **Dr. Abu Nowshed Chy**
    * Assistant Professor
    * Department of Computer Science & Engineering, University of Chittagong (CU), Chittagong, Bangladesh
    * Email: [nowshed@cu.ac.bd](mailto:nowshed@cu.ac.bd)
