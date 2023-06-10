import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={{uri: checkImageURL(companyLogo) ? companyLogo
                              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBp3gsQdFjO_r7zsVr0d-gs8n86rXGbmp3w&usqp=CAU'
                          }}
            style={styles.logoImage}
            resizeMode='contain' />
        </View>

        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>
        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName}/</Text>
          <View style={styles.locationBox}>
            <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>
      </View>
  )
}

export default Company