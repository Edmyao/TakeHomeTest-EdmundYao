/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */

import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";

const mapCompaniesIntoPeople = (people, companies) => {
    /* Map Company names into each person that they work for */
    // ASSUME:
    // mapCompaniesIntoPeople returns a value
};

const mapPeopleIntoHouses = (houses, people) => {
    /* Map people into house who live in the house */
    // ASSUME:
    // mapPeopleIntoHouses returns a value
};

class App extends React.Component {
    // ISSUE:
    // Component People and House are not imported or defined
    // styles object is not defined

    // FIX:
    // define or import component People and House
    // define or import styles

    render() {
        this.props.fetchPeople();
        return (
            <View style={styles.container}>
                <People data={this.props.people} />
                <House data={this.props.houses} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        people: { data },
        companies,
        houses,
    } = state;
    // ISSUE:
    // houses is being redefined after being initiated by using const
    // people: { data } works because it is declaring data as a const with value state.people.data
    // is there a reason why state.people.data exists and it is not just state.people ?

    // FIX:
    // change const to let
    // or
    // change the second declaration of houses to houseObject or some other name
    // then make return be { people, houses:houseObject }

    const people = mapCompaniesIntoPeople(data, companies);
    const houses = mapPeopleIntoHouses(houses, data);
    return {
        people,
        houses,
    };
};

const mapDispatchToProps = (dispatch) => ({
    // ISSUE:
    // function 'fetchPeople' is not defined or being imported

    // FIX:
    // define or import function fetchPeople
    fetchPeople: () => dispatch(fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
