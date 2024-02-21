class Shelf:
    def __init__(self, width, height, depth, num_rows):
        self.width = width
        self.height = height
        self.depth = depth
        self.num_rows = num_rows
        self.row_height = height // num_rows
        self.volume = width * height * depth
        self.remaining_space_per_row = [self.width * self.depth for _ in range(num_rows)]
        self.products_per_row = [[] for _ in range(num_rows)]
        self.products_stored = set()

    def add_product_to_row(self, product):
        for row_idx in range(self.num_rows):
            if product in self.products_per_row[row_idx]:
                continue  # Product already exists in this row, move to the next row
            while self.remaining_space_per_row[row_idx] >= product.volume and product.qty > 0:
                max_qty = self.remaining_space_per_row[row_idx] // product.volume
                qty_to_add = min(max_qty, product.max_qty, product.qty)
                space_to_add = qty_to_add * product.volume
                self.remaining_space_per_row[row_idx] -= space_to_add
                self.products_per_row[row_idx].extend([product] * qty_to_add)
                product.stored_count += qty_to_add
                product.qty -= qty_to_add
                if product.qty == 0:
                    self.products_stored.add(product)
                    return True  # Product completely placed
        return False  # Product not completely placed

class Product:
    def __init__(self, name, width, height, depth, max_qty):
        self.name = name
        self.width = width
        self.height = height
        self.depth = depth
        self.volume = width * height * depth
        self.stored_count = 0
        self.max_qty = max_qty  # Maximum quantity that can be stored
        self.qty = max_qty  # Remaining quantity to be stored



# Function to fit products onto shelves
def fit_products_on_shelves(products, shelves):
    placed_products = []
    unplaced_products = []
    
    # Sort shelves by remaining space to utilize space more efficiently
    shelves.sort(key=lambda x: sum(x.remaining_space_per_row), reverse=True)
    
    for product in products:
        placed = False
        for shelf in shelves:
            if product in shelf.products_stored:
                continue  # Product already exists in another shelf
            if any(product in row for row in shelf.products_per_row):
                continue  # Product already exists in this shelf
            if shelf.add_product_to_row(product) and product.name != "Watermelon":
                placed = True
                placed_products.append(product)
                break
        if not placed:
            unplaced_products.append(product)
    return placed_products, unplaced_products


def gg_data():

    # Product dimensions (width x height x depth) in cm
    products = [
        Product("iPhone 15",15, 7, 1,20),
        Product("Lipstick", 2,2,8,20),
        Product("Cricket Ball", 5,5,5,20),
        Product("Football", 10, 10, 10,20),
        Product("Sketchpen", 2,2,15,20),
        Product("Monitor", 22,36,47,20),
        Product("Mixed Dal", 5,5,10,20),
        Product("Paneer", 10,10,10,20),
        Product("Ball Pen", 1,1,15,20),
        Product("Rajma", 5,5,10,20)
    ]

    # Shelf dimensions (width x height x depth) in cm
    shelf1 = Shelf(150, 200, 50, 5)
    shelf2 = Shelf(100, 180, 60, 5)
    shelves = [shelf1, shelf2]

    # Sort products by volume in descending order
    products.sort(key=lambda x: x.volume, reverse=True)

    # Fit products onto the shelves
    placed_products, unplaced_products = fit_products_on_shelves(products, shelves)
    sendData = {}
    # Display products placed on each shelf

    for shelf_idx, shelf in enumerate(shelves, start=1):
        # print(f"\nProducts placed on Shelf {shelf_idx}:")
        all_data = []
        for row_idx, products_in_row in enumerate(shelf.products_per_row):
            unique_products = set(products_in_row)  # Using set to remove duplicate products
            row_data = []
            for product in unique_products:
                # print(f"{product.name} (Qty: {products_in_row.count(product)}) on row {row_idx + 1}")
                temp_data = {f"{product.name}": products_in_row.count(product)}
                row_data.append(temp_data)
            all_data.append(row_data)
        sendData[shelf_idx] = all_data

    # sendData

    # Calculate and display remaining space in each row
    print("\nRemaining space in each row (in cm²):")
    empty_space={}
    for shelf_idx, shelf in enumerate(shelves, start=1):
        temp_data = []
        for row_idx, remaining_space in enumerate(shelf.remaining_space_per_row, start=1):
            used_space = shelf.width * shelf.depth - remaining_space
            # print(f"Shelf {shelf_idx}, Row {row_idx}: {remaining_space:.2f} cm²")
            temp_data.append(f"{remaining_space:.2f}")
        empty_space[shelf_idx] = temp_data

    return sendData,empty_space

