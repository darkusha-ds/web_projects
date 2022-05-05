import mysql.connector

# admin password
password = 'admin'

# defining functions
def add_book():
    global cursor
    bookname = input("Enter bookname: ")
    genre = input("Enter Genre: ")
    quantity = int(input("Enter quantity: "))
    query = "INSERT into books(bookname,genre,quantity)" \
        "VALUES(%s,%s,%s)"
        
    vals = (bookname,genre,quantity)
    try:
        cursor.execute(query,vals)
        cnx.commit()
        print(f"Book {bookname} has been added")
    except:
        cnx.rollback()
        print("Something went wrong please try later")

def delete_book():
    global cursor
    bookname = input("Enter bookname: ")
    query = "DELETE FROM books WHERE bookname=%s"
    val = (bookname,)
    try:
        cursor.execute(query,val)
        cnx.commit()
        print(f"Book {bookname} has been deleted")
    except:
        cnx.rollback()
        print("Something went wrong please try later")


def update_quantity():
    global cursor
    bookname = input("Enter bookname to edit quantity: ")
    new_quantity = int(input("Enter New Quantity: "))
    query = """ UPDATE books  
    SET quantity=(%s)
    WHERE bookname=(%s)"""
    val = (new_quantity,bookname)
    try:
        cursor.execute(query,val)
        cnx.commit()
        print(f"quantity of Book {bookname} has been Updated")
    except:
        cnx.rollback()
        print("Something went wrong please try later")


def change_genre():
    global cursor
    bookname = input("Enter bookname to edit quantity: ")
    new_genre = input("Enter New genre: ")
    query = """ UPDATE books  
    SET genre=(%s)
    WHERE bookname=(%s)"""
    val = (new_genre,bookname)
    try:
        cursor.execute(query,val)
        cnx.commit()
        print(f"Genre of Book {bookname} has been changed to {new_genre}")
    except:
        cnx.rollback()
        print("Something went wrong please try later")


def search_book():
    available_book()
    bookname = input("Enter bookname to search: ")
    query = "select * from books where bookname=%s"
    val = (bookname,)
    try:
        cursor.execute(query,val)
        books_record = cursor.fetchall()
        print("BOOK AVAILABLE! \n BOOKNAME  GENRE  QUANTITY")
        for book_details in books_record:
            print(book_details)
        
    except:
        cnx.rollback()
        print("Book Not Found! Please Try Later")



def available_book():
    global cursor
    print("ALL AVAILABLE BOOKS")
    print("BOOKNAME  GENRE   QUANTITY")
    cursor.execute("Select * from books;")
    books_record = cursor.fetchall()
    for book_details in books_record:
        print(book_details)



# making a connection
cnx = mysql.connector.connect(user = 'root',passwd='toor',host='localhost',database='library')
if cnx.is_connected:
    cursor = cnx.cursor()


# menu 
print('**Welcome to Library Management system**')
user = input('Enter Code to Confirm User type \n 1.Client\n 2.Admin\n')
if user == '1':
    choice = input('Enter code to perform User operation \n 1.Search\n')
    search = 'Y'
    while search == 'Y':
        if choice == '1':
            search_book()
            search = input("Do you want to search for another book (Y/N)")
    
    print("Thank You for using Our Library Management system")

if user == '2':
    pass_check = input("Enter Admin Password To Procced: ")
    if pass_check == password:
        print('Enter code to perform Admin operation \n 1.Add New Book\n 2.Delete book\n 3.Update quantity\n 4.Change Genre\n 5.Search Book ')
        options = 'Y'
        while options == 'Y':
            option = input("Enter Option: ")
            if option == '1':
                add_book()
            if option == '2':
                delete_book()
            if option == '3':
                update_quantity()
            if option == '4':
                change_genre()
            if option == '5':
                search_book()
            options = input("Do you want to do anything else (Y/N)")
            options=options.upper()
        print("signing out of admin....")
            
    else:
        print("Wrong Password! \n [+] session expired: try later")

cnx.close()
