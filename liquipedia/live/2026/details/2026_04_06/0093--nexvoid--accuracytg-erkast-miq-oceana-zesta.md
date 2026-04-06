### Roster Details<br />
Team Name: NEXVOID<br />
Roster: AccuracyTG, erkaSt, MiQ, OCEANA, Zesta<br />
Global Rank: [93](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_05.md)<br />
Regional Rank: [8]( ../../standings_asia_2026_04_05.md)<br />
<br />
Final Rank Value:  1124.6<br />
<br />
Final Rank Value (1124.6) = Starting Rank Value (1205.5) + Head To Head Adjustments (-80.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.352[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.940[<sup>2</sup>](#table1)

The average of these factors is 0.412<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1205.5
- 400 + ( ( 0.412 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1205.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.299
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       61 | 2026-04-03 | 5star eSports          | L   | 1.000      | -            | -                | -                | -         |   -18.60 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           22 |      103 | 2026-04-03 | Team ZevS              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.87 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           21 |      149 | 2026-04-02 | 5star eSports          | L   | 1.000      | -            | -                | -                | -         |   -19.02 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           20 |      192 | 2026-04-01 | The Huns Esports       | L   | 1.000      | -            | -                | -                | -         |   -15.57 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           19 |      260 | 2026-03-31 | The Huns Esports       | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.487 (0.070)    | -         |    15.25 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           18 |      285 | 2026-03-31 | Chinggis Warriors      | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.384 (0.055)    | -         |    14.07 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           17 |      803 | 2026-03-21 | BMZ                    | L   | 1.000      | -            | -                | -                | -         |   -22.18 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           16 |      813 | 2026-03-20 | The Huns Esports       | W   | 1.000      | 0.307        | 0.011 (0.003)    | 0.487 (0.150)    | 1 (1.000) |    16.27 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           15 |      865 | 2026-03-20 | 5star eSports          | L   | 1.000      | -            | -                | -                | -         |   -18.39 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           14 |      870 | 2026-03-19 | FullW (Mongolian team) | W   | 1.000      | 0.307        | 0.001 (0.000)    | 0.031 (0.009)    | 1 (1.000) |     2.06 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           13 |      906 | 2026-03-19 | Chinggis Warriors      | L   | 1.000      | -            | -                | -                | -         |   -17.07 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           12 |      910 | 2026-03-18 | The QUBE Esports       | W   | 1.000      | 0.354        | 0.009 (0.003)    | 0.218 (0.077)    | 1 (1.000) |     4.33 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           11 |      956 | 2026-03-17 | 5star eSports          | W   | 1.000      | 0.354        | 0.021 (0.008)    | 0.241 (0.085)    | 1 (1.000) |    11.97 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|           10 |      995 | 2026-03-17 | Sensation              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.95 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|            9 |     1046 | 2026-03-15 | 100RA                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.40 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|            8 |     1309 | 2026-03-10 | Lynn Vision Gaming     | L   | 1.000      | -            | -                | -                | -         |   -14.06 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|            7 |     1366 | 2026-03-09 | The Huns Esports       | L   | 1.000      | -            | -                | -                | -         |   -12.84 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|            6 |     1380 | 2026-03-08 | DEPO                   | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.183 (0.026)    | -         |     1.80 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta    |
|            5 |     1872 | 2026-02-26 | Chinggis Warriors      | L   | 0.944      | -            | -                | -                | -         |   -17.70 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            4 |     1938 | 2026-02-26 | BMZ                    | L   | 0.938      | -            | -                | -                | -         |   -23.17 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            3 |     2848 | 2026-02-06 | The Huns Esports       | W   | 0.805      | 0.284        | 0.011 (0.003)    | 0.487 (0.111)    | 1 (0.805) |    10.57 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            2 |     2874 | 2026-02-05 | The Huns Esports       | W   | 0.798      | 0.284        | 0.011 (0.003)    | 0.487 (0.110)    | 1 (0.798) |    11.59 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            1 |     2878 | 2026-02-04 | BMZ                    | W   | 0.796      | 0.284        | 0.012 (0.003)    | 0.275 (0.062)    | 1 (0.796) |     6.59 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,586.34)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      1.000 | $375.00        | $375.00         |
| 2026-03-22 |      1.000 | $669.35        | $669.35         |
| 2026-03-20 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-02-27 |      0.951 | $225.00        | $213.95         |
| 2026-02-06 |      0.805 | $1,650.00      | $1,328.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
