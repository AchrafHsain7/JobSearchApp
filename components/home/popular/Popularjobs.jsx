import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'

import {COLORS, SIZES } from  '../../../constants';
import PopularJobsCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const {data, isLoading, error, refetch} = useFetch('search', {
    query: 'React developer',
    num_pages: '1',
  })

  if(data.lenght === 0){
      refetch();
  }
  const router = useRouter();
  
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (selectedJob) => {
    router.push(`/job-details/${selectedJob.job_id}`);
    
  }
  //console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
            { isLoading ? (
              <ActivityIndicator size='large' color={COLORS.primary} />
            ) : error ? (
              <Text>Something went wrong</Text>
            ) : (
              <FlatList 
                  data={data}
                  renderItem={({ item }) => (
                    <PopularJobsCard  
                        item={item}
                        selectedJob={selectedJob}
                        handleCardPress={handleCardPress}
                    />
                )}
                keyExtractor={item => item}
                contentContainerStyle={{columnGap: SIZES.medium}}
                horizontal
              />
            )}
        </View>
    </View>
  )
}

export default Popularjobs