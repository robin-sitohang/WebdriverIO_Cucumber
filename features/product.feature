Feature: Filtering Product on eBay


        Scenario: User Successfully Search By Category
            Given User Go To Homepage
             When User navigate to "<category>" in the category search
              And User click on cell phones smartphones in sidenav section
              And User Add Filter Screen Size, Price, Item Location
             Then User should see that the filter tags are applied
        Examples:
                  | category    |
                  | electronics |
    
        Scenario: Search for an item and verify the results
            Given User Go To Homepage
             When User type MacBook into the search bar
              And User change the search category to Iphone
             Then User should see that the first result name matches Iphone
