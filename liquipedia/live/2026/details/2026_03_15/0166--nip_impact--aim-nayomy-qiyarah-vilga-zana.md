### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [166](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [119]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  791.5<br />
<br />
Final Rank Value (791.5) = Starting Rank Value (785.4) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.4
- 400 + ( ( 0.197 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 785.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.073
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3001 | 2025-11-30 | BIG EQUIPA          | L   | 0.498      | -            | -                | -                | -         |    -5.67 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           15 |     3072 | 2025-11-28 | Atrix Esports       | W   | 0.486      | 0.605        | 0.023 (0.007)    | 0.046 (0.013)    | 1 (0.486) |     7.21 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           14 |     3082 | 2025-11-28 | Team Pigeons        | W   | 0.484      | 0.605        | 0.049 (0.014)    | 0.328 (0.096)    | 1 (0.484) |     8.87 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           13 |     3543 | 2025-11-09 | Team Pigeons        | L   | 0.359      | -            | -                | -                | -         |    -4.91 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           12 |     3642 | 2025-11-07 | Nemesis Impact      | W   | 0.346      | 0.317        | 0.001 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     3.53 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           11 |     3807 | 2025-11-04 | NoKami              | W   | 0.324      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.79 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           10 |     4173 | 2025-10-24 | Let Her Cook        | W   | 0.253      | 0.523        | 0.033 (0.004)    | 0.126 (0.017)    | 0 (0.000) |     3.93 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            9 |     4247 | 2025-10-23 | RUBY                | L   | 0.244      | -            | -                | -                | -         |    -3.95 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            8 |     4261 | 2025-10-22 | ENCE Academy        | L   | 0.239      | -            | -                | -                | -         |    -3.17 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            7 |     4400 | 2025-10-16 | NOVAQ               | L   | 0.197      | -            | -                | -                | -         |    -0.73 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            6 |     4439 | 2025-10-15 | SPARTA Esports      | L   | 0.190      | -            | -                | -                | -         |    -2.77 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            5 |     4584 | 2025-10-09 | AKA HERO KAJO       | W   | 0.153      | 0.523        | 0.001 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     1.24 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            4 |     4975 | 2025-10-01 | Hindsight           | W   | 0.100      | 0.523        | 0.002 (0.000)    | 0.034 (0.002)    | 0 (0.000) |     0.92 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            3 |     5268 | 2025-09-25 | 1w Team             | L   | 0.057      | -            | -                | -                | -         |    -0.11 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            2 |     5278 | 2025-09-24 | Flame Sharks Female | W   | 0.053      | 0.523        | 0.001 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     0.46 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            1 |     5298 | 2025-09-24 | UNiTY esports       | L   | 0.050      | -            | -                | -                | -         |    -0.54 | aiM, Nayomy, Qiyarah, vilga, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,208.29)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.498 | $26,500.00     | $13,208.29      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
