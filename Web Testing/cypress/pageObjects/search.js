export class Search
{

    getSearchBar()
    {
        cy.get('[aria-label="Search"]');
    }

    searchFor(keyword){
        cy.get('[aria-label="Search"]').click();
        cy.get('[aria-label="Search"]').type(keyword);
    }

}