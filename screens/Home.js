import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

// DUMMY DATA'S TO BE REPLACE BY API IN THE FUTURE (ITS MESSY IN ONE FILE 🤣)
const Home = ({ navigation }) => {
  const initialCurrentLocation = {
    streetName: 'Divisoria',
    gps: {
      latitude: 8.478114707051482,
      longitude: 124.64280516204751,
    },
  }

  const categoryData = [
    {
      id: 1,
      name: 'Rice',
      icon: icons.rice_bowl,
    },
    {
      id: 2,
      name: 'Noodles',
      icon: icons.noodle,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: icons.hotdog,
    },
    {
      id: 4,
      name: 'Salads',
      icon: icons.salad,
    },
    {
      id: 5,
      name: 'Burgers',
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: 'Pizza',
      icon: icons.pizza,
    },
    {
      id: 7,
      name: 'Snacks',
      icon: icons.fries,
    },
    {
      id: 8,
      name: 'Sushi',
      icon: icons.sushi,
    },
    {
      id: 9,
      name: 'Desserts',
      icon: icons.donut,
    },
    {
      id: 10,
      name: 'Drinks',
      icon: icons.drink,
    },
  ]

  const restaurantData = [
    {
      id: 1,
      name: 'Burger King Divisoria',
      rating: 4.8,
      categories: [5, 7],
      photo: images.burger_restaurant_1,
      duration: '30 - 45 min',
      location: {
        latitude: 8.477922267931639,
        longitude: 124.64481557553985,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: images.crispy_chicken_burger,
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 250,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: images.honey_mustard_chicken_burger,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 315,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo: images.baked_fries,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 248,
        },
      ],
    },
    {
      id: 2,
      name: 'Greenwich Divisoria',
      rating: 4.8,
      categories: [2, 4, 6],
      photo: images.pizza_restaurant,
      duration: '15 - 20 min',
      location: {
        latitude: 8.477226285050769,
        longitude: 124.64550222086483,
      },
      courier: {
        avatar: images.avatar_2,
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo: images.hawaiian_pizza,
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 215,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: images.pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 420,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: images.tomato_pasta,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 310,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo: images.salad,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 210,
        },
      ],
    },
    {
      id: 3,
      name: 'Hotdog Stand Ayala',
      rating: 4.8,
      categories: [3],
      photo: images.hot_dog_restaurant,
      duration: '20 - 25 min',
      location: {
        latitude: 8.485119567599684,
        longitude: 124.65048058533044,
      },
      courier: {
        avatar: images.avatar_3,
        name: 'James',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: images.chicago_hot_dog,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 120,
        },
      ],
    },
    {
      id: 4,
      name: 'Sushi House',
      rating: 4.8,
      categories: [8],
      photo: images.japanese_restaurant,
      duration: '40 - 55 min',
      location: {
        latitude: 8.486781400582199,
        longitude: 124.63429743929987,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Darwin',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi',
          photo: images.sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 350,
        },
      ],
    },
    {
      id: 5,
      name: 'Gaisano Food Court',
      rating: 4.8,
      categories: [1, 2],
      photo: images.noodle_shop,
      duration: '15 - 20 min',
      location: {
        latitude: 8.486449962092536,
        longitude: 124.65017892765856,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'MJ',
      },
      menu: [
        {
          menuId: 10,
          name: 'Samyang Noodles',
          photo: images.noodles1,
          description: 'Noodles with char siu',
          calories: 200,
          price: 55,
        },
        {
          menuId: 11,
          name: 'Pancit Canton',
          photo: images.noodles4,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 28,
        },
        {
          menuId: 12,
          name: 'Hot Noodles',
          photo: images.noodles3,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 48,
        },
        {
          menuId: 13,
          name: 'Noodles with Egg',
          photo: images.noodles2,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 58,
        },
      ],
    },
    {
      id: 6,
      name: 'SM Downtown Food Court',
      rating: 4.9,
      categories: [9, 10],
      photo: images.biscuit1,
      duration: '35 - 40 min',
      location: {
        latitude: 8.484494319518742,
        longitude: 124.65481704115085,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Golaman',
          photo: images.biscuit3,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 32,
        },
        {
          menuId: 13,
          name: 'Halo-Halo',
          photo: images.ice_cream,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 63,
        },
        {
          menuId: 14,
          name: 'Colorful Biscuit',
          photo: images.biscuit2,
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ] // DUMMY DATA'S TO BE REPLACE BY API IN THE FUTURE (ITS MESSY IN ONE FILE 🤣)

  // INITIALIZE VARIABLES
  const [categories, setCategories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)

  // FILTER RESTAURANT BY CATEGORIES
  const onSelectCategory = (category) => {
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    )
    setRestaurants(restaurantList)
    setSelectedCategory(category)
  }

  const getCategoryNameById = (id) => {
    let category = categories.filter((a) => a.id == id)
    if (category.length > 0) return category[0].name
    return ''
  }

  // DISPLAY DIFFERENT CATEGOTIES FOR RESTAURANTS
  const renderMainCategories = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <Text
            style={{
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )
    }

    return (
      <View
        style={{
          padding: SIZES.padding * 2,
          paddingTop: SIZES.height / 8,
          paddingBottom: 0,
        }}
      >
        <Image
          source={icons.logo}
          resizeMode="contain"
          style={{
            position: 'absolute',
            left: 0,
            top: 40,
            width: 200,
            height: 50,
          }}
        />

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    )
  }

  // DISPLAYING DIFFERENT RESTAURANTS
  const renderRestaurantList = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }
      >
        {/* FOOD IMAGE */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
        </View>

        {/* RESTAURANT NAME */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: 'row',
          }}
        >
          {/* RATING */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* CATEGORIES IN WHICH BELONGS TO */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: 'row' }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                    {' '}
                    .{' '}
                  </Text>
                </View>
              )
            })}
          </View>
        </View>
      </TouchableOpacity>
    )

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    )
  }

  return (
    // RENDERING DIFFERENT COMPONENTS IN SAFE AREA VIEW (IOS ONLY)
    <SafeAreaView style={styles.container}>
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  )
}

// STYLE SHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
})

export default Home
