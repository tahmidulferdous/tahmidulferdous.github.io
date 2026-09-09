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

Research Interests
======
* **Primary:** Technical AI Safety, Alignment, Evaluation Validity, Benchmark Integrity & Data Contamination Auditing.
* **Secondary:** Generative Modeling (Flow Matching, Diffusion, GANs), Medical Computer Vision, Distributed Training (Multi-GPU DDP, TPU v5e/JAX).

Education
======
* **International Islamic University Chittagong (IIUC)**, Chittagong, Bangladesh
  * Bachelor of Science in Computer Science and Engineering (2022 – 2026)
  * **Undergraduate Thesis:** Detecting Data Leakage in Lung Cancer CT Classification, across CNN, EfficientNet, and Vision Transformer models.
  * Post-submission re-analysis corrected the thesis's central claim: the IQ-OTH/NCCD release carries no patient identifier, so the comparison is an **ordering split**, not a patient-level one, and the measured cost is **7.5 accuracy points** across three seeds rather than the 12.46 originally reported. Full code, run logs and figures: [lung-ct-data-leakage-study](https://github.com/tahmidulferdous/lung-ct-data-leakage-study).

Publications
======
* *Manuscripts under preparation.*

Technical Skills
======
* **Programming Languages:** Python (Primary, 250+ logged experiments), C++, SQL, Bash/Shell, LaTeX.
* **Deep Learning Frameworks:** PyTorch (Advanced), JAX/Flax, torchvision, timm, TensorFlow/Keras, Hugging Face.
* **Computer Vision & ML Libraries:** OpenCV, MediaPipe, Ultralytics YOLOv11, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib.
* **Systems & Infrastructure:** Distributed Data Parallel (`torchrun`, multi-GPU DDP), Google Cloud TPU v5e (8-device JAX), Mixed Precision (AMP), Weights & Biases (250 tracked runs), Git, Docker, Linux/Ubuntu.
* **Models Built from Scratch:** Autoregressive Decoder Transformer (GPT-1), Rectified Flow / Flow Matching with ODE solvers, Conditional DDPM, WGAN-GP (gradient penalty & critic loop), DCGAN, Mamba-Attention hybrid (DSMaT).

Research & Professional Experience
======
* **EliteLab** — Remote
  * *Research Intern* (2026 – Present)

* **Outlier AI** — Remote
  * *AI Data Quality & Alignment Specialist* (November 2024 – February 2025)
  * Audited and curated large-scale human preference and reasoning datasets utilized for Reinforcement Learning from Human Feedback (RLHF) and alignment.
  * Refined multi-turn annotation guidelines, directly mitigating prompt ambiguity and improving inter-annotator reliability across reasoning benchmarks.

* **Freelance Contract (Client in USA)** — Remote
  * *Computer Vision Engineer* (November 2024)
  * Designed and deployed an automated computer vision packet-counting system for inventory management within a 15-day timeline, achieving real-time execution (>30 FPS) under CPU constraints.

Selected Research & Technical Projects
======
* **Conditional Rectified Flow for CT Synthesis on Google Cloud TPU v5e** (Feb 2026 – Mar 2026) · [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/main/extra_experiments/rectified-flow)
  * *PyTorch, JAX/Flax, Google Cloud TPU v5e, Weights & Biases (18 runs, 32.1 GPU-hours)*
  * Implemented class-conditional Rectified Flow (flow matching) from original mathematical literature: linear interpolant trajectory, velocity-prediction objective, logit-normal timestep sampling, and Euler/midpoint ODE numerical solvers.
  * Built multi-GPU DistributedDataParallel (DDP) PyTorch training infrastructure, then ported the complete architecture to JAX/Flax for 8-device Google TPU v5e, achieving 576 images/sec (2.50 s/epoch vs. 15.5 s/epoch on 2× Tesla T4) — a ~6× throughput speedup.

* **BanglaPoemGPT — 10M-Parameter Autoregressive Transformer from Scratch** (March 2025) · [Code](https://github.com/tahmidulferdous/bangla-gpt-from-scratch)
  * *Python, PyTorch, Kaggle P100 (4 runs, 2.0 GPU-hours)*
  * Engineered a GPT-1 architecture from first mathematical principles without high-level library wrappers: multi-head causal self-attention, learned positional embeddings, custom tokenizer, and autoregressive generation loop.
  * Trained on a 3M-token Bengali poetic corpus, achieving validation cross-entropy loss of 1.693 with coherent generative sampling.

* **Conditional DDPM for Minority-Class CT Balancing** (February 2026) · [Code](https://github.com/tahmidulferdous/lung-ct-data-leakage-study/tree/main/extra_experiments/diffusion)
  * *PyTorch, DistributedDataParallel, 2× Tesla T4 (5 runs, 4.2 GPU-hours)*
  * Constructed a class-conditional Denoising Diffusion Probabilistic Model (DDPM) featuring a conditional U-Net backbone, cosine noise schedule, and multi-GPU DDP orchestration, reaching a training loss of 0.0238 over 3,000 epochs.

* **Edge Vision: YOLOv11 Campus Security & Facial Biometric Systems** (Oct 2024 – Nov 2024) · [Code](https://github.com/tahmidulferdous/yolo11-idcard-detection)
  * *YOLOv11, OpenCV, FaceNet, PyTorch*
  * Curated, annotated, and trained custom YOLOv11-s/m models for campus ID compliance monitoring, reaching mAP50 = 0.82.
  * Implemented edge facial recognition utilizing SSD face detectors and FaceNet 128-d embeddings with cosine similarity matching, calibrating decision thresholds against false-accept/false-reject trade-offs.

*All experiments above are published with their code, per-run metrics and figures: [github.com/tahmidulferdous/ml-research-log](https://github.com/tahmidulferdous/ml-research-log) — 250 tracked training runs across 14 projects.*

Awards, Certifications & Achievements
======
* **DeepLearning.AI Specializations (Coursera):** Neural Networks & Deep Learning, Improving Deep Neural Networks (Tuning, Regularization, Optimization), Convolutional Neural Networks, Sequence Models.

Academic References
======
* **Md. Khaliluzzaman**
  * Associate Professor & Undergraduate Thesis Supervisor
  * Department of Computer Science and Engineering, International Islamic University Chittagong (IIUC), Chittagong, Bangladesh
  * Email: [khaliluzzaman@iiuc.ac.bd](mailto:khaliluzzaman@iiuc.ac.bd)

* **Dr. Abu Nowshed Chy**
  * Assistant Professor
  * Department of Computer Science & Engineering, University of Chittagong (CU), Chittagong, Bangladesh
  * Email: [nowshed@cu.ac.bd](mailto:nowshed@cu.ac.bd)
