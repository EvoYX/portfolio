# PortFolio

Websites Features:
- Food 
  - Check List Section:
    - Display a checklist of food places you want to visit, allowing visitors to see the list of places you plan to explore.
    - Provide the option for users to mark the food places they have visited, keeping track of their progress and creating a sense of achievement.
    - Implement a visually appealing design that clearly distinguishes between visited and unvisited food places.
  - Category Filter:
    - Incorporate a category filter feature that enables visitors to refine their search based on specific criteria such as cuisine type, location, or rating.
    - Allow users to select one or multiple categories to view relevant food places, enhancing the user experience and facilitating targeted exploration.
  - Foodie Section:
    - Display foodie places in a structured and visually appealing format, showcasing key details such as the name, food photos, rating, reviews, and a          description.
    - Include a rating system (such as stars or a numerical rating) to provide an overall indication of the quality or popularity of each food place.
    - Allow users to access additional information or read reviews by clicking on individual food places.
  - Interactive Map:
    - Integrate an interactive map that marks the different foodie locations you have visited or plan to visit.
    - Use markers or pins to represent each food place on the map, making it visually engaging and easy to navigate.
    - Implement click functionality on the markers to provide users with more details about each food place and the option to access directions using external map services like Google Maps.

- IT Documentation/Blog section can include your personal IT documentation or blog posts. 
  - Each post can be represented as a preview card with a title, date, and brief description. Clicking on a blog post preview card would take the visitor to the full blog post, where they can read the entire content and access any relevant attachments or code snippets.
- Personal Info 
##### Here's how the interactive map can work on your website:
```
1. Pinpointing Locations: Each foodie place you have visited can be represented by a marker or pin on the map. This marker indicates the exact location of the restaurant or eatery.

2. Pop-up Information: When a user clicks on a marker, a pop-up window or tooltip can appear, providing additional information about the foodie place, such as its name, address, and perhaps a photo or a brief description.

3. Zooming and Navigation: Users can zoom in and out of the map to explore different areas and see markers in more detail. They can also pan or drag the map to navigate to different regions or neighborhoods.

4. Filter or Category Options: You can include filter or category options on the map, allowing users to display markers based on specific criteria. For example, users could filter the map to only show markers for Asian cuisine or vegetarian-friendly restaurants.

5. Linking to More Details: You can provide a link within the marker's pop-up window, directing users to a dedicated page or section on your website with more information about the foodie place, such as ratings, reviews, or your personal experience.

An interactive map adds a visual and interactive element to your website, allowing visitors to explore the locations of your foodie experiences in an engaging way. It provides a visual context to your recommendations and enhances the overall user experience of your website.

There are various mapping APIs and libraries available that can help you implement an interactive map, such as Google Maps API, Mapbox, Leaflet, or OpenLayers. These tools provide the necessary functionality and customization options to integrate an interactive map into your personal website.
   +----------------------------------+
   |          Foodie Places           |
   +----------------------------------+
   |            Category              |
   |            Filter                |
   +----------------------------------+
   |                                  |
   |          Interactive Map         |
   |                                  |
   +----------------------------------+
   |                                  |
   |     [Foodie Place 1]             |
   |     [Food Photo]                 |
   |     [Rating & Reviews]           |
   |     [Description]                |
   |                                  |
   +----------------------------------+
   |                                  |
   |     [Foodie Place 2]             |
   |     [Food Photo]                 |
   |     [Rating & Reviews]           |
   |     [Description]                |
   |                                  |
   +----------------------------------+
   |                                  |
   |     [Foodie Place 3]             |
   |     [Food Photo]                 |
   |     [Rating & Reviews]           |
   |     [Description]                |
   |                                  |
   +----------------------------------+
   |                ...               |
   +----------------------------------+
```
 
Front End Library that will be using:
- Ant-Design
Backend:
- Mongo
Below are all the documentation I wanted to put in my portfoilo:
----
### Different ways of CSS Styling
There are many ways to do CSS styling, nevertheless this sections only covers the difference between the following styles:
- Styled-Components
- SASS
- Emotion Styled
- Tailwind-CSS

#### Styled-Components (Preferred way of styling)
Advantages:
- Easy maninenance. Dont need to hunt across different files to find the styling affecting your components.
- No classname bugs. It generate unique classnames for your styles. Wont have to worry about duplication, overlap
- Dynamic styling. Adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
- Easier deletion of CSS. Every bits of styling is tied to a specific components so if the componenets is unused and it get deleted.All its styles will also get deleted with it
- Able to write CSS to current standard & styled-components will handle the rest.
- It keep tracks of which components are rendered on the page and injects their styles and nothing else. Thus, it load the least amount of code neccesary.

##### Adapting based on props:
##### Extending Styles:
Quite frequently you might want to use a component, but change it slightly for a single case. Now, you could pass in an interpolated function and change them based on some props, but that's quite a lot of effort for overriding the styles once.

Example:


### Ways of monitoring components 
This section covers the following sections:
- Intersection-Observer
- Matomo
- Splunk (Backend)
#### Intersection - Observer

### Different Ways Of State Management
- React Query
- Zustand
- Redux
- React Context

## Java Knowledge
### Method reference
- Eg: (::)

### Javascript & TypeScript

### Front-End Libraries (Low priority)
This Sections covers a large variety of front-end libraries that can be used in Web-Development.
- Mantine
- Ant Design
- Material UI
#### Mantine:
Mantine is built with TypeScript with dark theme mode. Material UI is built with JavaScript.
Sample Website:
Personal Reflection:
### Ant Design:
Sample Website:
### Material UI:
Sample Website:
Personal Reflection:

### HTML,CSS, JAVASCRIPT PROJECTS
##### Useful VSCode Extension:
- Live Server: 
  - Launch a development local Server with live reload feature for static & dynamic pages.

##### Useful Javascript Plugins:
-

## Blog Posts

### Different Card Designs && 10 recorded videos of the course web overview
 
#### CSS Useful Tricks
- Transform origin
- translatez
- overflowx
- transform
- keyframe
- media query
- target
- perspective

#### Scrum and Agile Development: Tips for Success
---
Agile software development has become increasingly popular over the years, with Scrum being one of the most widely used frameworks. Scrum is a methodology that allows teams to work collaboratively and efficiently on projects by breaking them down into smaller, manageable pieces. With Scrum, teams can improve their productivity, communication, and overall project success. Here are some tips for success in Scrum and Agile development.

##### 1. Understand the Roles and Responsibilities

In Scrum, there are three primary roles: the Product Owner, the Scrum Master, and the Development Team. It is important for each member to understand their role and responsibilities in the framework to ensure a smooth workflow. The Product Owner is responsible for managing the product backlog, while the Scrum Master is responsible for facilitating the Scrum process and removing impediments. The Development Team is responsible for delivering the product increment.

##### 2. Set Realistic Sprint Goals

Sprint goals should be realistic and achievable. If they are not, it can lead to burnout, reduced morale, and lower quality work. It is important to involve the Development Team in the estimation process, as they are closest to the work and can provide the most realistic estimates. It is also crucial to avoid changing the sprint goal during the sprint, as it can kill the team's commitment and motivation.

##### 3. Use Timeboxing to Improve Productivity

Timeboxing is a technique where a fixed amount of time is allocated for a task. This approach helps team members stay focused, prioritize work, and provide structure. Timeboxing also helps to identify problems and mistakes more quickly, allowing for rapid improvement.

##### 4. Encourage Communication and Coordination

Communication and coordination are key to the success of any project. With Scrum, daily sprints are used to ensure that team members are updated on each other's progress. It is important to note that the daily sprint is not intended for communication with the client or Product Owner. The Sprint Review, held at the end of each sprint, is a gathering of all stakeholders to examine the product and make adjustments.

##### 5. Focus on Continuous Improvement

Continuous improvement is a crucial aspect of Scrum and Agile development. At the end of each sprint, a retrospective is held to evaluate how the sprint went and identify areas for improvement. It is important to remember that Scrum does not guarantee success, but it does guarantee transparency. By identifying areas for improvement, teams can improve their productivity, quality, and overall success.

##### 6. Address Impediments to Productivity

Impediments are anything that slows down or holds back progress. It is important to identify and address impediments to ensure that the team can work efficiently. This can involve removing obstacles or finding new solutions. By reducing impediments, teams can increase their productivity and achieve better results.

In conclusion, Scrum and Agile development offer a structured and effective approach to software development. By understanding roles and responsibilities, setting realistic sprint goals, using timeboxing, encouraging communication and coordination, focusing on continuous improvement, and addressing impediments, teams can improve their productivity, quality, and success.


#### Scrum and Agile Development: Overcoming Common Challenges in Scrum

---

Scrum is a popular Agile framework that helps teams to work together to achieve a common goal. Scrum teams focus on delivering high-quality products by working in sprints, which are fixed-length iterations. While Scrum can be an effective framework, it can also pose some challenges for teams. In this blog post, we'll explore some of the common challenges that Scrum teams face and provide some tips for overcoming them.

##### Challenge #1: Lack of clarity in roles and responsibilities

One of the most common challenges that Scrum teams face is a lack of clarity in roles and responsibilities. Scrum defines three roles: the Product Owner, the Scrum Master, and the Development Team. However, teams may struggle to define the specific responsibilities for each role, leading to confusion and inefficiencies.

To overcome this challenge, it's important for teams to have a clear understanding of each role's responsibilities. The Product Owner is responsible for defining the product backlog and prioritizing items, while the Scrum Master is responsible for facilitating the Scrum process and removing obstacles. The Development Team is responsible for delivering the product increment during each sprint.

##### Challenge #2: Inefficient sprint planning

Another common challenge in Scrum is inefficient sprint planning. Sprint planning is a critical activity where the team determines which backlog items they will work on during the upcoming sprint. If the planning process is not efficient, it can lead to delays and missed deadlines.

To overcome this challenge, teams should ensure that they have a clear understanding of the scope and requirements for each backlog item. They should also break down each item into smaller, more manageable tasks to help them estimate the effort required to complete it. Finally, the team should work together to prioritize the backlog items and determine which ones are most critical for the upcoming sprint.

##### Challenge #3: Poor communication and collaboration

Communication and collaboration are essential components of Scrum. However, poor communication and collaboration can lead to misunderstandings, delays, and lower quality products.

To overcome this challenge, teams should establish clear communication channels and encourage regular collaboration. The Scrum Master should facilitate daily stand-up meetings, where team members can update each other on their progress and discuss any obstacles they are facing. The Product Owner should also be available to answer questions and provide feedback on the team's work.

##### Challenge #4: Inability to adapt to change

Scrum is designed to be a flexible framework that can adapt to changes in requirements or priorities. However, some teams may struggle to adapt to change, leading to delays and missed deadlines.

To overcome this challenge, teams should embrace change as a natural part of the development process. They should be prepared to adjust their backlog and priorities based on feedback from stakeholders or changes in market conditions. The team should also regularly reflect on their progress and adjust their approach as needed.

In conclusion, Scrum can be an effective framework for teams looking to deliver high-quality products. However, teams may face challenges related to roles and responsibilities, sprint planning, communication, and adapting to change. By establishing clear communication channels, breaking down backlog items into manageable tasks, and embracing change as a natural part of the process, Scrum teams can overcome these challenges and achieve their goals.

### Efficient Java and TypeScript Tips for React and Spring Boot
---
As a developer working with React and Spring Boot, you're likely using Java and TypeScript in your projects. These languages come with various tips and shortcuts that can save you time and help you write cleaner code. In this post, we'll cover some of the most useful ones for Java and TypeScript in React and Spring Boot.

#### Java Shortcuts in Spring Boot

##### Method References

Method references are a useful way to pass behavior to higher-order functions. They allow you to pass a method as a reference instead of a lambda expression. This can make your code more concise and readable.

For example, let's say you have a list of strings that you want to sort:

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
```

You can sort the list using a lambda expression:

```java
names.sort((a, b) -> a.compareTo(b));
```

Or, you can use a method reference:

```java
names.sort(String::compareTo);
```

In this case, the `String::compareTo` method reference is equivalent to the lambda expression `(a, b) -> a.compareTo(b)`.

##### Optional

The `Optional` class is a container object that may or may not contain a value. It provides a way to avoid null pointer exceptions and write more concise code.

For example, let's say you have a method that returns a nullable value:

```java
public String findNameById(int id) {
    // ...
    return null;
}
```

You can use the `Optional` class to wrap the return value:

```java
public Optional<String> findNameById(int id) {
    // ...
    return Optional.ofNullable(null);
}
```

Then, you can use the `orElse` method to provide a default value if the value is not present:

```java
String name = findNameById(1).orElse("Unknown");
```

#### TypeScript Shortcuts in React

##### Optional Chaining

Optional chaining is a way to safely access properties of an object that may be null or undefined. It allows you to avoid null pointer exceptions and write more concise code.

For example, let's say you have a user object that may or may not have an address:

```typescript
type User = {
  name: string;
  address?: {
    street: string;
    city: string;
    state: string;
  };
};
```

You can use optional chaining to safely access the `street` property of the `address` object:

```typescript
const street = user.address?.street;
```

If the `address` object is null or undefined, the expression evaluates to `undefined`.

##### Nullish Coalescing

Nullish coalescing is a way to provide a default value for a variable that may be null or undefined. It allows you to avoid null pointer exceptions and write more concise code.

For example, let's say you have a user object that may or may not have a name:

```typescript
type User = {
  name?: string;
};
```

You can use nullish coalescing to provide a default name if the `name` property is null or undefined:

```typescript
const name = user.name ?? "Unknown";
```

If the `name` property is null or undefined, the expression evaluates to the default value `"Unknown"`.

#### Conclusion

In this post, we covered some of the most useful tips and shortcuts for Java and TypeScript in React and Spring Boot. By using these shortcuts, you can save time and write cleaner, more concise code.
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
