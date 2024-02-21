from PIL import Image
import os

def convert_to_png(input_path, output_path):
    try:
        # Open the image file
        img = Image.open(input_path)
        
        # Save the image in PNG format
        img.save(output_path, "PNG")
        print(f"Converted {input_path} to PNG successfully.")
    except Exception as e:
        print(f"Failed to convert {input_path}: {e}")

def batch_convert_to_png(input_dir, output_dir):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Iterate over each file in the input directory
    for filename in os.listdir(input_dir):
        input_path = os.path.join(input_dir, filename)
        if os.path.isfile(input_path):
            # Construct the output path
            output_path = os.path.join(output_dir, os.path.splitext(filename)[0] + ".png")
            # Convert the file to PNG
            convert_to_png(input_path, output_path)

# Example usage:
input_directory = "./Images"
output_directory = "./Converted"
batch_convert_to_png(input_directory, output_directory)
