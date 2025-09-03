#!/bin/bash

# Script to optimize images for better web performance
# This will resize large images and compress them

echo "Optimizing images..."

# Create optimized directory
mkdir -p public/images/optimized

# Process JPEG images
for img in public/images/*.jpeg; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        echo "Processing $filename..."

        # Get image dimensions
        dimensions=$(identify -format "%wx%h" "$img")

        # If image is larger than 800px on any side, resize it
        if [[ $dimensions =~ ([0-9]+)x([0-9]+) ]]; then
            width=${BASH_REMATCH[1]}
            height=${BASH_REMATCH[2]}

            if [ $width -gt 800 ] || [ $height -gt 800 ]; then
                echo "Resizing $filename from ${width}x${height} to fit within 800x800..."
                convert "$img" -resize "800x800>" -quality 85 "public/images/optimized/$filename"
            else
                echo "Compressing $filename (already reasonable size)..."
                convert "$img" -quality 85 "public/images/optimized/$filename"
            fi
        fi
    fi
done

# Process PNG images
for img in public/images/*.png; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        echo "Processing $filename..."

        # Get image dimensions
        dimensions=$(identify -format "%wx%h" "$img")

        # If image is larger than 800px on any side, resize it
        if [[ $dimensions =~ ([0-9]+)x([0-9]+) ]]; then
            width=${BASH_REMATCH[1]}
            height=${BASH_REMATCH[2]}

            if [ $width -gt 800 ] || [ $height -gt 800 ]; then
                echo "Resizing $filename from ${width}x${height} to fit within 800x800..."
                convert "$img" -resize "800x800>" -quality 85 "public/images/optimized/$filename"
            else
                echo "Compressing $filename (already reasonable size)..."
                convert "$img" -quality 85 "public/images/optimized/$filename"
            fi
        fi
    fi
done

echo "Optimization complete!"
echo "Optimized images are in public/images/optimized/"
echo "You can replace the original images with the optimized versions if desired."