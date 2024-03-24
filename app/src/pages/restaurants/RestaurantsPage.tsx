import Navbar from 'src/components/navbar';
import { FooterMenuColumnProps } from 'src/components/footer/footer.types';
import Footer from 'src/components/footer';
import RestaurantsList from './restaurants-list/RestaurantsList';
import { RestaurantProps } from './restaurants_page.types';
import { SortComponentProps } from 'src/components/ui/sort-component/sort_component.types';
import { SearchComponentProps } from 'src/components/ui/search-component/search_component.types';
import SearchComponent from 'src/components/ui/search-component/SearchComponent';
import SortComponent from 'src/components/ui/sort-component/SortComponent';
import './restaurants_page.css'
import ReactPaginate from 'react-paginate';
import useMediaQuery from 'src/hooks/useMediaQuery';

const RestaurantsPage = () => {

    const mb = useMediaQuery('(max-width: 450px)');
    const vs = useMediaQuery('(max-width: 360px)');


    const cities: string[] = [
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
    ]

    const menu_columns: FooterMenuColumnProps[] = [
        {
          title: 'Company',
          items: ['About us', 'Team', 'Careers', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help & Support', 'Partner with us', 'Ride with us']
        },
    ]
    
    const restaurants: RestaurantProps[] = [
        {
            name: 'McDonalds', 
            description: 'TestTestTes tTestTestTes tTestTestTest TestTestTestT estTestTestTestTestTe stTestTes tTestTestTestTe stTestTestT estTestTest',
            imageUrl: 'images/food1.png',
            ratingValue: 5.00
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds', 
            description: 'TestTestTes tTestTestTes tTestTestTest TestTestTestT estTestTestTestTestTe stTestTes tTestTestTestTe stTestTestT estTestTest',
            imageUrl: 'images/food1.png',
            ratingValue: 5.00
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds', 
            description: 'TestTestTes tTestTestTes tTestTestTest TestTestTestT estTestTestTestTestTe stTestTes tTestTestTestTe stTestTestT estTestTest',
            imageUrl: 'images/food1.png',
            ratingValue: 5.00
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
        {
            name: 'McDonalds',
            description: 'Test',
            imageUrl: 'images/food1.png',
            ratingValue: 5
        },
    ]

    const options = [
        {
            label: 'Popularity',
            value: 'popularity'
        },
        {
            label: 'Popularit',
            value: 'popularit'
        }
    ]

    const searchProps: SearchComponentProps = {
        onSearch: async (query) => {console.log(query)}
    }

    const sortProps: SortComponentProps = {
        options,
        onSort: async (sortOption) => {console.log(sortOption)}
    }
    
    const handlePageClick = ({selected} : {selected: number}) => {
        console.log(selected)
    }

    const getPageRangeDisplayed = () => {
        if (mb || vs)
            return 0

        return 3
    }

    const getMarginPagesDisplayed = () => {
        if (vs)
            return 0

        return 1
    }

    return (
        <div className="container restaurants__container">
            <Navbar/>
            <div className="restaurants__wrapper">
                <div className="restaurants__content">
                    <div className="restaurants__header">
                        <h1 className="restaurants__title">Restaurants</h1>
                    </div>
                    <div className="restaurants__filters">
                        <SearchComponent onSearch={searchProps.onSearch}/>
                        <SortComponent options={options} onSort={sortProps.onSort}/>
                    </div>
                    <RestaurantsList restaurants={restaurants}/>
                    <ReactPaginate breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={getPageRangeDisplayed()}
                                marginPagesDisplayed={getMarginPagesDisplayed()}
                                pageCount={20}
                                previousLabel="<"
                                containerClassName='restaurants__pagination__container'
                                pageClassName='restaurants__pagination__page'
                                nextClassName='restaurants__pagination__next'
                                previousClassName='restaurants__pagination__previous'
                                activeClassName='restaurants__pagination__active'
                                disabledClassName='restaurants__pagination__disabled'
                                breakClassName='restaurants__pagination__break'
                                renderOnZeroPageCount={null}/>
                </div>
            </div>
            <Footer cities={cities} cities_per_column={5} menu_columns={menu_columns} />
        </div>
    )
}

export default RestaurantsPage;