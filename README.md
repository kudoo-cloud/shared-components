# Overview

The `React` components are separated by our classification
* bosons
* nuclei
* atoms
* screens

Bosons are the smallest UI components we have and make up the base components of everything we do. Bosons are the lowest common denominator

Nuclei consist of a bunch of commonly used components that together form a piece of common functionality

Atoms are the building blocks of the application. They can be thought of as the Lego blocks that make up the application. The Atoms are:
* Drawer
* Footer
* HeaderBar
* NotFound
* Tabs
* Screens

# Creating a basic screen

The webapp will always consist of at least the following components
* drawer
* headerBar
* screen

```javascript
import React from 'react';
import Drawer, HeaderBar from './index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

<Router>
    <Route
    render={() => (
        <Drawer
            companies={[{ id: 1, name: 'Kudoo' }, { id: 2, name: 'Facebook' }]}
            selectedCompany={{ id: 1, name: 'Kudoo', owner: true }}
        />
        <HeaderBar
            headerLabel={'Dashboard'}
            profile={{ firstName: 'John', lastName: 'Doe' }}
        />
    )}
    />
</Router>

```
