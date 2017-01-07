import os
# from mainThread import compileBeerList
import pickle


def populate():
    
    #Populate Craft Beers
    sample_beer_database = pickle.load(open("sample__beer_database.p", "rb"))

    counter = 1
    for beer_name in sample_beer_database:
        print beer_name[0]
        add_Beer(str(counter), beer_name, sample_beer_database[beer_name][0],
                 sample_beer_database[beer_name][2], sample_beer_database[beer_name][1],
                 sample_beer_database[beer_name][3], sample_beer_database[beer_name][4], counter)
        counter += 1



    # Populate Visitors
    sample_visitor_database = pickle.load(open("sample__visitor_database.p", "rb"))

    counter = 1
    for visitor in sample_visitor_database:
        print visitor[0]
        add_Visitor(counter, visitor[0], visitor[1], visitor[2])
        counter += 1


    #Create Superuser
    create_super_user('user', 'user@scoop.com', 'password!!')

def add_Beer(beerID, beer_name, ABV, SRM, IBU, acidity, image_link, sequence_added):
    b, created = CraftBeer.objects.get_or_create(beerID=beerID, beer_name=beer_name, ABV=ABV, SRM=SRM, IBU=IBU,
                                                 acidity=acidity, image_link=image_link, sequence_added=sequence_added)
    print ("- CraftBeer: {0}, Created: {1}".format(str(b), str(created)))
    return b

def add_Visitor(visitor_number, ip_address, geolocation, search_parameters):
    v, created = Visitor.objects.get_or_create(visitor_number=visitor_number,ip_address=ip_address, geolocation=geolocation, search_parameters=search_parameters)
    print ("- Visitor: {0}, Created: {1}".format(str(v), str(created)))
    return v



def create_super_user(username, email, password):
    '''
    for some reason get_or_create didn't work with creating the
    SuperUser so here is a try/except, with an IntegrityError
    raised if the SuperUser already exists
    '''
    try:
        u = User.objects.create_superuser(username, email, password)
        return u
    except IntegrityError:
        pass


if __name__ == '__main__':
    print '\n' + ('=' * 80) + '\n'
    import django

    os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                          'ScoopProject.settings')
    django.setup()
    from ScoopApp.models import CraftBeer, Visitor
    from django.contrib.auth.models import User
    from django.db import IntegrityError

    populate()  # Call the populate function, which calls the
    # add_genre and add_musician functions


