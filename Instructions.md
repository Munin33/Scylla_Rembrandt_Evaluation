This file contains information about the usage and structure of the data used for evaluation.

# Scylla Configuration:
Scylla requires three configuration files:
* a BPMN diagram
* a gloabl configuration
* a simulation configuration

## BPMN diagram:
Because Scylla identifies the corresponding Rembrandt allocation algorithm by the name of the activity, different allocation algorithms require different activity names in the BPMN diagram. This is why different BPMN files exist.


## Global configuration:
This configuration provides information about available resources in Scylla.
in the first two evaluation cases, three clerk resources are configured in this file.
In combination with Rembrandt, a single RembrandtResource is defined as meta resource, so that Scylla knows it has to request an allocation by Rembrandt. 

## simulation configuration:
This configuration includes the number of process instances to simulate (set to 100), the arrival of new process instances (set to 30 minutes) and the duration of each activity (depends on the simulated case).
Additionally, this file specifies, which activity uses which type of resource defined in the global configuration (different in case 1 and 2 to cases 3 to 6)


# Allocation Algorithm used in Rembrandt:
Two different allocation algorithms were used. 
* NotSoRandomClerk: Clerk1 is selected with 50% probability, Clerk2 with 30% probability and Clerk3 with 20% Probability.
* RandomClerk: every clerk is selected with the probability of 1/3.

#Allocation Database:
Whenever Rembrandt was used for allocating resources, a databse entry about this allocation was added.
The task duration is not known at this time, so it was added later by letting Rembrandt read the created event log.


# Evaluation:
During the Evaluation, a total of 6 different cases were simulated, each of them 100 times.
Rembrandt had 3 different resource instances in each case, where it was used. 
Each contains an "Experience" attribute, which is configured as meta-attribute "timeAttribute", so that it influences the simulated duration of the activity. Clerk1 has an Experience value of 0.8, Clerk 2 has 1.1 and Clerk3 has 1.3.

### Case1) Simulation of 100 process instances without Rembrandt and a constant activity duration.
The files are found in the "Config_without_Rembrandt" folder

BPMN File: RegisterParcels.bpmn

global configuration: RegisterParcels_global.xml

simulation configuration: RegisterParcels_sim_constant.xml

IDs in Allocation log: not available

### Case2) Simulation of 100 process instances without Rembrandt and a normal distributed activity duration (mean: 60 minutes, standard deviation: 15 minutes).

BPMN File: RegisterParcels.bpmn

global configuration: RegisterParcels_global.xml

simulation configuration: RegisterParcels_sim_normal.xml

IDs in Allocation log: not available

### Case3) Simulation of 100 process instances with Rembrandt and the algorithm "NotSoRandomClerk" and a constant activity duration. The files are found in the "Configuration_with_Rembrandt" folder.

BPMN File: RegisterParcelsNotSoRandom.bpmn

global configuration: RegisterParcelsRembrandt_global.xml

simulation configuration: NotSoRandom_sim_constant.xml

IDs in Allocation log: 0-100

### Case4) Simulation of 100 process instances with Rembrandt and the algorithm "NotSoRandomClerk" and a normal distributed activity duration (mean: 60 minutes, standard deviation: 15 minutes).

BPMN File: RegisterParcelsNotSoRandom.bpmn

global configuration: RegisterParcelsRembrandt_global.xml

simulation configuration: NotSoRandom_sim_normal.xml

IDs in Allocation log: 260-360

### Case5) Simulation of 100 process instances, when setting the experience value of Clerk3 to 1.1.
with Rembrandt and the algorithm "NotSoRandomClerk" and a normal distributed activity duration (mean: 60 minutes, standard deviation: 15 minutes).

BPMN File: RegisterParcelsNotSoRandom.bpmn

global configuration: RegisterParcelsRembrandt_global.xml

simulation configuration: NotSoRandom_sim_normal.xml

IDs in Allocation log: 830-930

### Case6) Simulation of 100 process instances, with Rembrandt and the algorithm "RandomClerk" and a normal distributed activity duration (mean: 60 minutes, standard deviation: 15 minutes).

BPMN File: RegisterParcelsRandom.bpmn

global configuration: RegisterParcelsRembrandt_global.xml

simulation configuration: Random_sim_normal.xml

IDs in Allocation log: 2154-2258



