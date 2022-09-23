Feature: Main Functionality
  
  Scenario: The header displays correctly
      Given the user visits the page "/"
      Then the user sees the string "Marvel Application!"

  Scenario: The data from the Marvel API loads correctly
      Given the user visits the page "/"
      Then the user sees the string "3-D Man"
      Then the user sees the string "A-Bomb (HAS)"
      Then the user sees the string "A.I.M."

  Scenario: The About play displays correctly
      Given the user visits the page "/"
      Given the user clicks the element which says "About"
      Then the page hyperlink should contain "about"
      Given the user visits the page "/about"
      Then the user sees the string "Marvel Comics (or simply Marvel) is an American comic book"

  Scenario: The user vists the character page
      Given the user visits the page "/"
      Then the user clicks on the first element which says "Find out more"
      Then the user sees the string "List of comics for this character:"
      Then the user should not see the string "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL"
      Then the user clicks the element which says "Avengers: The Initiative (2007) #19"
      Then the user sees the string "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL"

