# Insect Trap Webpage

Web-based recognition and counting system for Pest Advisor, a vision-based Decision Support System (DSS) for insect pest monitoring in rice fields.

## What it does
Receives images from the camera-equipped field trap (see `insect-camera-trap-server`), runs YOLOv8 with Slicing-Aided Hyper Inference (SAHI) to detect, classify, and count insects caught on yellow sticky traps, and presents results to help farmers make informed pest management decisions.

## Why SAHI
Standard YOLO struggles with small objects in large images — insects on a sticky trap are exactly this case. SAHI slices each image into overlapping tiles, runs detection per tile, then merges results, substantially improving small-object detection accuracy over plain YOLOv8.

## Results
Evaluated across field trials in three rice paddies (Jasaan, San Juan, Patimbao), the YOLOv8 + SAHI model achieved 65.72% accuracy, 72.01% precision, 62.53% recall, and a 65.72% F1-score — the strongest of five YOLO variants tested.

## Related repos
- [insect-camera-trap-server](https://github.com/Gvtone/insect-camera-trap-server) — OrangePi-based field hardware and image capture

## Background
Developed as an undergraduate thesis project addressing a real gap: prior Philippine DSS attempts for rice pest monitoring (Cubillas et al., 2020) lacked a functional recognition module. This system pairs real field deployment with a validated, benchmarked recognition pipeline.
