### Roster Details<br />
Team Name: Metizport<br />
Roster: Dragon, isak, Jackinho, MaiL09, nawwk<br />
Global Rank: [178](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [121]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  787.6<br />
<br />
Final Rank Value (787.6) = Starting Rank Value (753.2) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.2
- 400 + ( ( 0.181 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 753.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.044
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     4510 | 2025-11-15 | Alliance             | L   | 0.253      | -            | -                | -                | -         |    -0.14 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           14 |     4532 | 2025-11-14 | Johnny Speeds        | W   | 0.247      | 0.400        | 0.067 (0.007)    | 0.794 (0.078)    | 1 (0.247) |     7.49 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           13 |     4560 | 2025-11-13 | Megoshort            | W   | 0.239      | 0.400        | 0.004 (0.000)    | 0.336 (0.032)    | 1 (0.239) |     5.91 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           12 |     4587 | 2025-11-12 | Alliance             | L   | 0.233      | -            | -                | -                | -         |    -0.12 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           11 |     4600 | 2025-11-12 | Megoshort            | W   | 0.232      | 0.400        | 0.004 (0.000)    | 0.336 (0.031)    | 1 (0.232) |     5.78 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           10 |     4746 | 2025-11-08 | BetBoom Team         | L   | 0.205      | -            | -                | -                | -         |    -0.11 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            9 |     4763 | 2025-11-07 | MASONIC              | W   | 0.201      | 0.336        | 0.000 (0.000)    | 0.520 (0.035)    | 1 (0.201) |     5.16 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            8 |     4770 | 2025-11-07 | Minkens finest       | W   | 0.200      | 0.336        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.200) |     0.72 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            7 |     4784 | 2025-11-07 | Inner Circle Esports | L   | 0.200      | -            | -                | -                | -         |    -0.54 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            6 |     4801 | 2025-11-07 | Acend                | W   | 0.199      | 0.336        | 0.035 (0.002)    | 0.771 (0.052)    | 1 (0.199) |     6.01 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            5 |     4817 | 2025-11-07 | Johnny Speeds        | L   | 0.199      | -            | -                | -                | -         |    -0.20 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            4 |     4835 | 2025-11-07 | Young Ninjas         | W   | 0.198      | 0.336        | 0.000 (0.000)    | 0.017 (0.001)    | 1 (0.198) |     1.39 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            3 |     5030 | 2025-10-31 | JiJieHao             | L   | 0.153      | -            | -                | -                | -         |    -0.44 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            2 |     5071 | 2025-10-29 | Nexus Gaming         | W   | 0.140      | 0.435        | 0.001 (0.000)    | 0.450 (0.027)    | 0 (0.000) |     3.83 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            1 |     5104 | 2025-10-28 | JiJieHao             | L   | 0.133      | -            | -                | -                | -         |    -0.37 | Dragon, isak, Jackinho, MaiL09, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,877.46)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.253 | $7,407.95      | $1,877.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
